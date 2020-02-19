<?php

declare(strict_types=1);

namespace TheTurk\Diff\Renderer\Html;

use Jfcherng\Diff\Differ;
use Jfcherng\Diff\Renderer\Html\AbstractHtml;
use Jfcherng\Diff\Factory\LineRendererFactory;
use Jfcherng\Diff\Renderer\RendererConstant;
use Jfcherng\Diff\SequenceMatcher;

/**
 * Json diff generator.
 * (WITHOUT HTML CLOSURES)
 */
final class Json extends AbstractHtml
{
    /**
     * {@inheritdoc}
     */
    public const INFO = [
        'desc' => 'Json',
        'type' => 'Html',
    ];

    /**
     * {@inheritdoc}
     */
    public const IS_TEXT_RENDERER = true;

    /**
     * {@inheritdoc}
     */
    public function getResultForIdenticalsDefault(): string
    {
        return '[]';
    }

    /**
     * Render and return an array structure suitable for generating HTML
     * based differences. Generally called by subclasses that generate a
     * HTML based diff and return an array of the changes to show in the diff.
     *
     * @param Differ $differ the differ object
     *
     * @return array an array of the generated changes, suitable for presentation in HTML
     */
    public function getChanges(Differ $differ): array
    {
        $lineRenderer = LineRendererFactory::make(
            $this->options['detailLevel'],
            $differ->getOptions(),
            $this->options
        );

        $old = $differ->getOld();
        $new = $differ->getNew();

        $changes = [];

        foreach ($differ->getGroupedOpcodes() as $opcodes) {
            $blocks = [];
            $lastTag = SequenceMatcher::OP_NOP;
            $lastBlock = 0;

            foreach ($opcodes as [$tag, $i1, $i2, $j1, $j2]) {
                if ($tag === SequenceMatcher::OP_REP &&
                    $i2 - $i1 === $j2 - $j1
                ) {
                    for ($i = 0; $i < $i2 - $i1; ++$i) {
                        $this->renderChangedExtent($lineRenderer, $old[$i1 + $i], $new[$j1 + $i]);
                    }
                }

                if ($tag !== $lastTag) {
                    $blocks[] = $this->getDefaultBlock($tag, $i1, $j1);
                    $lastBlock = \count($blocks) - 1;
                }

                $lastTag = $tag;

                if ($tag === SequenceMatcher::OP_EQ) {
                    $lines = \array_slice($new, $j1, $j2 - $j1);
                    $blocks[$lastBlock]['newLines'] += $this->formatLines($lines);

                    continue;
                }

                if ($tag & (SequenceMatcher::OP_REP | SequenceMatcher::OP_DEL)) {
                    $lines = \array_slice($old, $i1, $i2 - $i1);
                    $lines = $this->formatLines($lines);
                    $lines = \str_replace(
                        RendererConstant::HTML_CLOSURES,
                        '',
                        $lines
                    );

                    $blocks[$lastBlock]['oldLines'] += $lines;
                }

                if ($tag & (SequenceMatcher::OP_REP | SequenceMatcher::OP_INS)) {
                    $lines = \array_slice($new, $j1, $j2 - $j1);
                    $lines = $this->formatLines($lines);
                    $lines = \str_replace(
                        RendererConstant::HTML_CLOSURES,
                        '',
                        $lines
                    );

                    $blocks[$lastBlock]['newLines'] += $lines;
                }
            }

            $changes[] = $blocks;
        }

        return $changes;
    }

    /**
     * Get the default block.
     *
     * @param int $tag the operation tag
     * @param int $i1  begin index of the diff of the old array
     * @param int $j1  begin index of the diff of the new array
     *
     * @return array the default block
     */
    protected function getDefaultBlock(int $tag, int $i1, int $j1): array
    {
        return [
            'tag' => $tag,
            'oldNumber' => $i1,
            'newNumber' => $j1,
            'oldLines' => [],
            'newLines' => [],
        ];
    }

    /**
     * {@inheritdoc}
     */
    protected function redererChanges(array $changes): string
    {
        if ($this->options['outputTagAsString']) {
            $this->convertTagToString($changes);
        }

        return \json_encode(
            $changes,
            \JSON_UNESCAPED_UNICODE | \JSON_UNESCAPED_SLASHES
        );
    }

    /**
     * Convert tags of changes to their string form for better readability.
     *
     * @param array $changes the changes
     */
    protected function convertTagToString(array &$changes): void
    {
        foreach ($changes as &$blocks) {
            foreach ($blocks as &$change) {
                $change['tag'] = SequenceMatcher::opIntToStr($change['tag']);
            }
        }
    }

    /**
     * {@inheritdoc}
     */
    protected function formatStringFromLines(string $string): string
    {
        return $this->htmlSafe($string);
    }
}
