<?php

declare(strict_types=1);

namespace TheTurk\Diff\Renderer\Html;

use Jfcherng\Diff\SequenceMatcher;
use Jfcherng\Diff\DiffHelper;
use Jfcherng\Diff\Renderer\Html\AbstractHtml;

/**
 * Side by Side HTML diff generator.
 */
final class SideBySide extends AbstractHtml
{
    /**
     * {@inheritdoc}
     */
    public const INFO = [
        'desc' => 'Side by side',
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

        $oneSide = $otherSide = '';

        $wrapperClasses = \array_merge(
            $this->options['wrapperClasses'],
            ['TheTurkDiff', 'diff-wrapper', 'diff-html', 'diff-side-by-side']
        );

        $classNames = \implode(' ', $wrapperClasses);

        if ($this->options['lineNumbers']) {
            $html = '<div class="' . $classNames . '">';
            $html .= $this->renderTableHeader();
            $html .= '<div class="diff-blocks">';
        } else {
            $html = '<table class="' . $classNames . '">';
        }

        foreach ($changes as $i => $blocks) {
            if ($i > 0 && $this->options['separateBlock']) {
                if ($this->options['lineNumbers']) {
                    $tableSeparateBlock = $this->renderTableSeparateBlock();

                    $oneSide .= $tableSeparateBlock;
                    $otherSide .= $tableSeparateBlock;
                } else {
                    $html .= $this->renderCustomSeparateBlock();
                }
            }

            foreach ($blocks as $change) {
                if ($this->options['lineNumbers']) {
                    $oneSide .= $this->renderTableBlock($change, 'old');
                    $otherSide .= $this->renderTableBlock($change, 'new');
                } else {
                    $html .= $this->renderTableBlock($change, '');
                }
            }
        }

        if ($this->options['lineNumbers']) {
            $html .= $this->hunkWrapper([$oneSide, $otherSide]);
            return $html . '</div></div>';
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
     * Hunk wrapper.
     * @param array $hunks
     * @return string
     */
    protected function hunkWrapper(array $hunks): string
    {
        $html = '';
        $i = 0;

        foreach ($hunks as $hunk) {
            $side = ($i === 0 ? 'left' : 'right');

            $html .=
                '<div class="diff-side-item ' . $side . '-item">' .
                    '<div class="diff-code-wrapper">' .
                        '<table class="diff-table">' .
                            '<tbody>' .
                                $hunk .
                            '</tbody>' .
                        '</table>' .
                    '</div>' .
                '</div>';

            $i++;
        }

        return $html;
    }

    /**
     * Renderer the custom separate block.
     */
    protected function renderCustomSeparateBlock(): string
    {
        return
            '<tbody class="skipped">' .
                '<tr>' .
                    '<td colspan="2"></td>' .
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
                '<td class="diff-code-side-linenumber diff-info"></td>' .
                '<td class="diff-info">' .
                    '<div class="diff-code-side-line diff-info"></div>' .
                '</td>' .
            '</tr>';
    }

    /**
     * Renderer the table block.
     *
     * @param array $change the change
     * @param string $type
     * @return string
     */
    protected function renderTableBlock(array $change, string $type): string
    {
        static $callbacks = [
            SequenceMatcher::OP_EQ => 'renderTableEqual',
            SequenceMatcher::OP_INS => 'renderTableInsert',
            SequenceMatcher::OP_DEL => 'renderTableDelete',
            SequenceMatcher::OP_REP => 'renderTableReplace',
        ];

        if ($type === '') {
            return
                '<tbody class="change change-' . self::TAG_CLASS_MAP[$change['tag']] . '">' .
                    $this->{$callbacks[$change['tag']]}($change, $type) .
                '</tbody>';
        }

        return $this->{$callbacks[$change['tag']]}($change, $type);
    }

    /**
     * Renderer the table block: equal.
     *
     * @param array $change the change
     * @param string $type
     * @return string
     */
    protected function renderTableEqual(array $change, string $type): string
    {
        $html = '';

        foreach ($change['newLines'] as $no => $newLine) {
            if ($this->options['lineNumbers']) {
                $oldLineNum = $change['oldNumber'] + $no + 1;
                $newLineNum = $change['newNumber'] + $no + 1;

                if ($type === 'old') {
                    $html .= $this->renderTableContent('cntx', $oldLineNum, $newLine);
                } else {
                    $html .= $this->renderTableContent('cntx', $newLineNum, $newLine);
                }
            } else {
                $html .=
                    '<tr>' .
                        '<td class="new" colspan="2">' . $newLine . '</td>' .
                    '</tr>';
            }
        }

        return $html;
    }

    /**
     * Renderer the table block: insert.
     *
     * @param array $change the change
     * @param string $type
     * @return string
     */
    protected function renderTableInsert(array $change, string $type): string
    {
        $html = '';

        foreach ($change['newLines'] as $no => $newLine) {
            if ($this->options['lineNumbers']) {
                $newLineNum = $change['newNumber'] + $no + 1;

                if ($type === 'old') {
                    $html .= $this->renderTableContent('cntx', null, '<br>');
                } else {
                    $html .= $this->renderTableContent('ins', $newLineNum, $newLine);
                }
            } else {
                $html .=
                    '<tr>' .
                        '<td class="new" colspan="2">' . $newLine . '</td>' .
                    '</tr>';
            }
        }

        return $html;
    }

    /**
     * Renderer the table block: delete.
     *
     * @param array $change the change
     * @param string $type
     * @return string
     */
    protected function renderTableDelete(array $change, string $type): string
    {
        $html = '';

        foreach ($change['oldLines'] as $no => $oldLine) {
            if ($this->options['lineNumbers']) {
                $oldLineNum = $change['oldNumber'] + $no + 1;

                if ($type === 'old') {
                    $html .= $this->renderTableContent('del', $oldLineNum, $oldLine);
                } else {
                    $html .= $this->renderTableContent('cntx', null, '<br>');
                }
            } else {
                $html .=
                    '<tr>' .
                        '<td class="old" colspan="2">' . $oldLine . '</td>' .
                    '</tr>';
            }
        }

        return $html;
    }

    /**
     * Renderer the table block: replace.
     *
     * @param array $change the change
     * @param string $type
     * @return string
     */
    protected function renderTableReplace(array $change, string $type): string
    {
        $html = '';

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

            if ($type === '') {
                $html .=
                    '<tr>' .
                        '<td class="rep-del">' . $oldLine . '</td>' .
                        '<td class="rep-ins">' . $newLine . '</td>' .
                    '</tr>';
            } elseif ($type === 'old') {
                $html .= $this->renderTableContent('change-del', $oldLineNum, $oldLine);
            } else {
                $html .= $this->renderTableContent('change-ins', $newLineNum, $newLine);
            }
        }

        return $html;
    }

    /**
     * Renderer the table content.
     *
     * @param string $type The diff type
     * @param null|int $lineNum The line number
     * @param string $content
     * @return string
     */
    protected function renderTableContent(string $type, ?int $lineNum, string $content): string
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
                '<td class="diff-code-side-linenumber ' . $className . '">' .
                    ($lineNum ?? null) .
                '</td>' .
                '<td class="' . $className . '">' .
                    '<div class="diff-code-side-line ' . $className . '">' .
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
