<?php

declare(strict_types=1);

namespace TheTurk\Diff\Renderer\Html;

use Jfcherng\Diff\SequenceMatcher;
use Jfcherng\Diff\DiffHelper;
use Jfcherng\Diff\Renderer\Html\AbstractHtml;

/**
 * Inline HTML diff generator.
 */
final class Inline extends AbstractHtml
{
    /**
     * {@inheritdoc}
     */
    public const INFO = [
        'desc' => 'Inline',
        'type' => 'Html',
    ];

    /**
     * @var string
     */
    private $detailLevel;

    /**
     * @var array
     */
    private $translationKeys;

    /**
     * @param string $value
     * @return void
     */
    public function setDetailLevel(string $value): void
    {
        $this->detailLevel = $value;
    }

    /**
     * @return string
     */
    protected function getDetailLevel(): string
    {
        return $this->detailLevel;
    }

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
            ['TheTurkDiff', 'diff-wrapper', 'diff-html', 'diff-inline']
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

        foreach ($changes as $i => $blocks) {
            if ($i > 0 && $this->options['separateBlock']) {
                if ($this->options['lineNumbers']) {
                    $html .= $this->renderTableSeparateBlock();
                } else {
                    $html .= $this->renderCustomSeparateBlock();
                }
            }

            foreach ($blocks as $change) {
                $html .= $this->renderTableBlock($change);
            }
        }

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
                '<td class="diff-code-linenumber diff-info"></td>' .
                '<td class="diff-info">' .
                    '<div class="diff-code-line diff-info"></div>' .
                '</td>' .
            '</tr>';
    }

    /**
     * Renderer the table block.
     *
     * @param array $change the change
     * @return string
     */
    protected function renderTableBlock(array $change): string
    {
        static $callbacks = [
            SequenceMatcher::OP_EQ => 'renderTableEqual',
            SequenceMatcher::OP_INS => 'renderTableInsert',
            SequenceMatcher::OP_DEL => 'renderTableDelete',
            SequenceMatcher::OP_REP => 'renderTableReplace',
        ];

        if ($this->options['lineNumbers']) {
            return $this->{$callbacks[$change['tag']]}($change);
        }

        return
            '<tbody class="change change-' . self::TAG_CLASS_MAP[$change['tag']] . '">' .
                $this->{$callbacks[$change['tag']]}($change) .
            '</tbody>';
    }

    /**
     * Renderer the table block: equal.
     *
     * @param array $change the change
     * @return string
     */
    protected function renderTableEqual(array $change): string
    {
        $html = '';

        foreach ($change['newLines'] as $no => $newLine) {
            if ($this->options['lineNumbers']) {
                $oldLineNum = $change['oldNumber'] + $no + 1;
                $newLineNum = $change['newNumber'] + $no + 1;

                $html .= $this->renderTableContent('cntx', $oldLineNum, $newLineNum, $newLine);
            } else {
                $html .=
                    '<tr>' .
                        '<td class="old">' . $newLine . '</td>' .
                    '</tr>';
            }
        }

        return $html;
    }

    /**
     * Renderer the table block: insert.
     *
     * @param array $change the change
     * @return string
     */
    protected function renderTableInsert(array $change): string
    {
        $html = '';

        foreach ($change['newLines'] as $no => $newLine) {
            $newLineNum = $change['newNumber'] + $no + 1;

            if ($this->options['lineNumbers']) {
                $html .= $this->renderTableContent('ins', null, $newLineNum, $newLine);
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
     * @param array $change the change
     * @return string
     */
    protected function renderTableDelete(array $change): string
    {
        $html = '';

        foreach ($change['oldLines'] as $no => $oldLine) {
            $oldLineNum = $change['oldNumber'] + $no + 1;

            if ($this->options['lineNumbers']) {
                $html .= $this->renderTableContent('del', $oldLineNum, null, $oldLine);
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
     * @param array $change the change
     * @return string
     */
    protected function renderTableReplace(array $change): string
    {
        $html = '';
        $newLinesHtml = '';

        $lineCountMax = \max(\count($change['oldLines']), \count($change['newLines']));

        for ($no = 0; $no < $lineCountMax; ++$no) {
            if (isset($change['oldLines'][$no])) {
                $oldLineNum = $change['oldNumber'] + $no + 1;
                $oldLine = $change['oldLines'][$no];
            } else {
                $oldLineNum = null;
                $oldLine = '';
            }

            if (isset($change['newLines'][$no])) {
                $newLineNum = $change['newNumber'] + $no + 1;
                $newLine = $change['newLines'][$no];
            } else {
                $newLineNum = null;
                $newLine = '';
            }

            $diffs = $this->calculateDiffsBetweenLines($oldLine, $newLine);
            $oldLine = $diffs['old']['lines'][0];
            $newLine = $diffs['new']['lines'][0];

            if ($this->options['lineNumbers']) {
                $html .= $this->renderTableContent('change-del', $oldLineNum, null, $oldLine);
                $newLinesHtml .= $this->renderTableContent('change-ins', null, $newLineNum, $newLine);
            } else {
                $html .=
                    '<tr>' .
                        '<td class="rep-del">' . $oldLine . '</td>' .
                    '</tr>';

                $newLinesHtml .=
                    '<tr>' .
                        '<td class="rep-ins">' . $newLine . '</td>' .
                    '</tr>';
            }
        }

        $html .= $newLinesHtml;

        return $html;
    }

    /**
     * Renderer the table content.
     *
     * @param string $type The diff type
     * @param int|null $oldLineNum
     * @param int|null $newLineNum
     * @param string $content
     * @return string
     */
    protected function renderTableContent(string $type, ?int $oldLineNum, ?int $newLineNum, string $content): string
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
                '<td class="diff-code-linenumber ' . $className . '">' .
                    '<div class="line-num1">' .
                        ($oldLineNum ?? null) .
                    '</div>' .
                    '<div class="line-num2">' .
                        ($newLineNum ?? null) .
                    '</div>' .
                '</td>' .
                '<td class="' . $className . '">' .
                    '<div class="diff-code-line ' . $className . '">' .
                        '<span class="diff-code-line-prefix">' . $sign . '</span>' .
                        '<span class="diff-code-line-ctn">' . $content . '</span>' .
                    '</div>' .
                '</td>' .
            '</tr>';
    }

    /**
     * @param string $oldLine
     * @param string $newLine
     * @return array
     */
    protected function calculateDiffsBetweenLines(string $oldLine, string $newLine): array
    {
        $differ = DiffHelper::calculate(
            \htmlspecialchars_decode($oldLine, \ENT_NOQUOTES),
            \htmlspecialchars_decode($newLine, \ENT_NOQUOTES),
            'Json',
            [],
            ['detailLevel' => $this->getDetailLevel()]
        );

        return json_decode($differ, true)[0][0];
    }
}
