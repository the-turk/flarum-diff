<?php

declare(strict_types=1);

namespace TheTurk\Diff\Renderers\Html;

use Jfcherng\Diff\Factory\LineRendererFactory;
use Jfcherng\Diff\Renderer\RendererConstant;
use Jfcherng\Diff\SequenceMatcher;
use Jfcherng\Diff\Utility\ReverseIterator;
use Jfcherng\Utility\MbString;
use Jfcherng\Diff\Renderer\Html\AbstractHtml;

/**
 * Combined HTML diff generator.
 *
 * Note that this renderer always has no line number.
 */
final class Combined extends AbstractHtml
{
    /**
     * {@inheritdoc}
     */
    const INFO = [
        'desc' => 'Combined',
        'type' => 'Html',
    ];

    /**
     * @var array
     */
    private $translationKeys;

    /**
     * @param array $value
     * @return void
     */
    public function setTranslationKeys(array $value): void
    {
        $this->translationKeys = $value;
    }

    /**
     * @return array
     */
    protected function getTranslationKeys(): array
    {
        return $this->translationKeys;
    }

    /**
     * {@inheritdoc}
     */
    protected function redererChanges(array $changes): string
    {
        if (empty($changes)) {
            return $this->getResultForIdenticals();
        }

        $wrapperClasses = \array_merge(
            $this->options['wrapperClasses'],
            ['TheTurkDiff', 'diff-wrapper', 'diff-html', 'diff-combined']
        );

        $classNames = \implode(' ', $wrapperClasses);

        if ($this->options['lineNumbers']) {
            $html = '<div class="' . $classNames . '">';
            $html .= $this->renderTableHeader();
            $html .=
                '<div class="diff-block">' .
                    '<div class="diff-code-wrapper">' .
                        '<table class="diff-table">' .
                            '<tbody>';
        } else {
            $html = '<table class="' . $classNames . '">';
        }

        $html .= $this->renderTableHunks($changes);

        if ($this->options['lineNumbers']) {
            return $html . '</tbody></table></div></div></div>';
        }

        return $html . '</table>';
    }

    /**
     * Renderer the table header.
     */
    protected function renderTableHeader(): string
    {
        return
            '<div class="diff-header">' .
                '<span class="diff-heading-wrapper">' .
                    '<span class="diff-heading-icon">' .
                        '<i class="far fa-edit"></i>' .
                    '</span>' .
                    '<span class="diff-heading-title">' .
                        $this->getTranslationKeys()['differences'] .
                    '</span>' .
                '</span>' .
            '</div>';
    }

    /**
     * Renderer the custom separate block.
     */
    protected function renderCustomSeparateBlock(): string
    {
        return
            '<tbody class="skipped">' .
                '<tr>' .
                    '<td></td>' .
                '</tr>' .
            '</tbody>';
    }

    /**
     * Renderer the table separate block.
     */
    protected function renderTableSeparateBlock(): string
    {
        return
            '<tr>' .
                '<td class="diff-info">' .
                    '<div class="diff-code-line diff-info"></div>' .
                '</td>' .
            '</tr>';
    }

    /**
     * Renderer table hunks.
     *
     * @param array[][] $hunks each hunk has many blocks
     */
    protected function renderTableHunks(array $hunks): string
    {
        $html = '';

        foreach ($hunks as $i => $hunk) {
            if ($i > 0 && $this->options['separateBlock']) {
                if ($this->options['lineNumbers']) {
                    $html .= $this->renderTableSeparateBlock();
                } else {
                    $html .= $this->renderCustomSeparateBlock();
                }
            }

            foreach ($hunk as $block) {
                $html .= $this->renderTableBlock($block);
            }
        }

        return $html;
    }

    /**
     * Renderer the table block.
     *
     * @param array $block the block
     */
    protected function renderTableBlock(array $block): string
    {
        static $callbacks = [
            SequenceMatcher::OP_EQ => 'renderTableBlockEqual',
            SequenceMatcher::OP_INS => 'renderTableBlockInsert',
            SequenceMatcher::OP_DEL => 'renderTableBlockDelete',
            SequenceMatcher::OP_REP => 'renderTableBlockReplace',
        ];

        return
            '<tbody class="change change-' . self::TAG_CLASS_MAP[$block['tag']] . '">' .
                $this->{$callbacks[$block['tag']]}($block) .
            '</tbody>';
    }

    /**
     * Renderer the table block: equal.
     *
     * @param array $block the block
     */
    protected function renderTableBlockEqual(array $block): string
    {
        $html = '';

        // note that although we are in a OP_EQ situation,
        // the old and the new may not be exactly the same
        // because of ignoreCase, ignoreWhitespace, etc
        foreach ($block['new']['lines'] as $newLine) {
            // but in this renderer, we can only pick either the old or the new to show
            if ($this->options['lineNumbers']) {
                $html .= $this->renderTableContent('cntx', $newLine);
            } else {
                $html .=
                    '<tr>' .
                        '<td class="new">' . $newLine . '</td>' .
                    '</tr>';
            }
        }

        return $html;
    }

    /**
     * Renderer the table block: insert.
     *
     * @param array $block the block
     */
    protected function renderTableBlockInsert(array $block): string
    {
        $html = '';

        foreach ($block['new']['lines'] as $newLine) {
            if ($this->options['lineNumbers']) {
                $html .= $this->renderTableContent('ins', $newLine);
            } else {
                $html .=
                    '<tr>' .
                        '<td class="new">' . $newLine . '</td>' .
                    '</tr>';
            }
        }

        return $html;
    }

    /**
     * Renderer the table block: delete.
     *
     * @param array $block the block
     */
    protected function renderTableBlockDelete(array $block): string
    {
        $html = '';

        foreach ($block['old']['lines'] as $oldLine) {
            if ($this->options['lineNumbers']) {
                $html .= $this->renderTableContent('del', $oldLine);
            } else {
                $html .=
                    '<tr>' .
                        '<td class="old">' . $oldLine . '</td>' .
                    '</tr>';
            }
        }

        return $html;
    }

    /**
     * Renderer the table block: replace.
     *
     * @param array $block the block
     */
    protected function renderTableBlockReplace(array $block): string
    {
        $html = '';

        $oldLines = $block['old']['lines'];
        $newLines = $block['new']['lines'];

        $oldLinesCount = \count($oldLines);
        $newLinesCount = \count($newLines);

        // if the line counts changes, we treat the old and the new as
        // "a line with \n in it" and then do one-line-to-one-line diff
        if ($oldLinesCount !== $newLinesCount) {
            [$oldLines, $newLines] = $this->markReplaceBlockDiff($oldLines, $newLines);
            $oldLinesCount = $newLinesCount = 1;
        }

        // fix for "detailLevel" is "none"
        $this->fixLinesForNoClosure($oldLines, RendererConstant::HTML_CLOSURES_DEL);
        $this->fixLinesForNoClosure($newLines, RendererConstant::HTML_CLOSURES_INS);

        // now $oldLines must has the same line counts with $newlines
        for ($no = 0; $no < $newLinesCount; ++$no) {
            if ($this->options['lineNumbers']) {
                $html .= $this->renderTableContent(
                    '',
                    $this->mergeReplaceLines($oldLines[$no], $newLines[$no])
                );
            } else {
                $html .=
                    '<tr>' .
                        '<td class="rep">' .
                            $this->mergeReplaceLines($oldLines[$no], $newLines[$no]) .
                        '</td>' .
                    '</tr>';
            }
        }

        return $html;
    }

    /**
     * Merge two "replace"-type lines into a single line.
     *
     * The implementation concept is that if we remove all closure parts from
     * the old and the new, the rest of them (cleaned line) should be the same.
     * And then, we add back those removed closure parts in a correct order.
     *
     * @param string $oldLine the old line
     * @param string $newLine the new line
     */
    protected function mergeReplaceLines(string $oldLine, string $newLine): string
    {
        $delParts = $this->analyzeClosureParts(
            RendererConstant::HTML_CLOSURES_DEL[0],
            RendererConstant::HTML_CLOSURES_DEL[1],
            $oldLine,
            SequenceMatcher::OP_DEL
        );

        $insParts = $this->analyzeClosureParts(
            RendererConstant::HTML_CLOSURES_INS[0],
            RendererConstant::HTML_CLOSURES_INS[1],
            $newLine,
            SequenceMatcher::OP_INS
        );

        // create a sorted merged parts array
        $mergedParts = \array_merge($delParts, $insParts);
        \usort($mergedParts, function (array $a, array $b): int {
            // first sort by "offsetClean" then by "type"
            return $a['offsetClean'] <=> $b['offsetClean']
                ?: ($a['type'] === SequenceMatcher::OP_DEL ? -1 : 1);
        });

        // get the cleaned line by a non-regex way (should be faster)
        // i.e., the new line with all "<ins>...</ins>" parts removed
        $mergedLine = $newLine;
        foreach (ReverseIterator::fromArray($insParts) as $part) {
            $mergedLine = \substr_replace(
                $mergedLine,
                '', // deletion
                $part['offset'],
                $part['length']
            );
        }

        // insert merged parts into the cleaned line
        foreach (ReverseIterator::fromArray($mergedParts) as $part) {
            $mergedLine = \substr_replace(
                $mergedLine,
                // the closure part from its source string
                \substr(
                    $part['type'] === SequenceMatcher::OP_DEL ? $oldLine : $newLine,
                    $part['offset'],
                    $part['length']
                ),
                $part['offsetClean'],
                0 // insertion
            );
        }

        return \str_replace("\n", '<br>', $mergedLine);
    }

    /**
     * Analyze and get the closure parts information of the line.
     *
     * Such as
     *     extract informations for "<ins>part 1</ins>" and "<ins>part 2</ins>"
     *     from "Hello <ins>part 1</ins>SOME OTHER TEXT<ins>part 2</ins> World"
     *
     * @param string $ld   the left delimiter
     * @param string $rd   the right delimiter
     * @param string $line the line
     * @param int    $type the line type
     *
     * @return array[] the closure informations
     */
    protected function analyzeClosureParts(string $ld, string $rd, string $line, int $type): array
    {
        $ldLength = \strlen($ld);
        $rdLength = \strlen($rd);

        $parts = [];
        $partStart = $partEnd = 0;
        $partLengthSum = 0;

        // find the next left delimiter
        while (false !== ($partStart = \strpos($line, $ld, $partEnd))) {
            // find the corresponding right delimiter
            if (false === ($partEnd = \strpos($line, $rd, $partStart + $ldLength))) {
                break;
            }

            $partEnd += $rdLength;
            $partLength = $partEnd - $partStart;

            $parts[] = [
                'type' => $type,
                // the offset in the line
                'offset' => $partStart,
                'length' => $partLength,
                // the offset in the cleaned line (i.e., the line with closure parts removed)
                'offsetClean' => $partStart - $partLengthSum,
            ];

            $partLengthSum += $partLength;
        }

        return $parts;
    }

    /**
     * Mark differences between two "replace" blocks.
     *
     * Each of the returned block (lines) is always only one line.
     *
     * @param string[] $oldBlock The old block
     * @param string[] $newBlock The new block
     *
     * @return string[][] the value of [[$oldLine], [$newLine]]
     */
    protected function markReplaceBlockDiff(array $oldBlock, array $newBlock): array
    {
        static $isInitiated = false, $mbOld, $mbNew, $lineRenderer;

        if (!$isInitiated) {
            $isInitiated = true;

            $mbOld = new MbString();
            $mbNew = new MbString();
            $lineRenderer = LineRendererFactory::make(
                $this->options['detailLevel'],
                [], /** @todo is it possible to get the differOptions here? */
                $this->options
            );
        }

        $mbOld->set(\implode("\n", $oldBlock));
        $mbNew->set(\implode("\n", $newBlock));

        $lineRenderer->render($mbOld, $mbNew);

        $oldLine = \str_replace(
            RendererConstant::HTML_CLOSURES,
            RendererConstant::HTML_CLOSURES_DEL,
            $mbOld->get()
        );

        $newLine = \str_replace(
            RendererConstant::HTML_CLOSURES,
            RendererConstant::HTML_CLOSURES_INS,
            $mbNew->get()
        );

        return [
            [$oldLine], // one-line block for the old
            [$newLine], // one-line block for the new
        ];
    }

    /**
     * Wrap the whole line with closures if it does not have one.
     *
     * @param string[] $lines    the lines
     * @param string[] $closures the closures
     */
    protected function fixLinesForNoClosure(array &$lines, array $closures): void
    {
        foreach ($lines as &$line) {
            // there is no closure in a "replace"-type line
            // this means that the entire line changes
            if (false === \strpos($line, $closures[0])) {
                $line = "{$closures[0]}{$line}{$closures[1]}";
            }
        }
    }

    /**
     * Renderer the table content.
     *
     * @param string $type The diff type
     * @param string $content
     * @return string
     */
    protected function renderTableContent(string $type, string $content): string
    {
        switch ($type) {
            case 'change-ins':
            case 'ins':
                $sign = '+';
                break;
            case 'change-del':
            case 'del':
                $sign = '-';
                break;
            default:
                $sign = '&nbsp;';
        }

        if (in_array($type, ['ins', 'del', 'cntx'])) {
            $className = 'diff-' . $type;
        } else {
            $className = 'diff-change';
            $className .= ($type === 'change-ins' ? ' diff-ins' : ' diff-del');
        }

        return
            '<tr>' .
                '<td class="' . $className . '">' .
                    '<div class="diff-code-line ' . $className . '">' .
                        '<span class="diff-code-line-prefix">' . $sign . '</span>' .
                        '<span class="diff-code-line-ctn">' . $content . '</span>' .
                    '</div>' .
                '</td>' .
            '</tr>';
    }
}
