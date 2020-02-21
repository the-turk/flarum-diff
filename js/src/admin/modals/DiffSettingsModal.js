import app from 'flarum/app';
import SettingsModal from 'flarum/components/SettingsModal';
import Select from 'flarum/components/Select';
import Switch from 'flarum/components/Switch';

// just to make things easier
const settingsPrefix = 'the-turk-diff.';
const localePrefix = 'the-turk-diff.admin.settings.';

export default class DiffSettingsModal extends SettingsModal {
    title()
    {
        return app.translator.trans(localePrefix + 'title');
    }

    /**
     * Build modal form.
     *
     * @returns {*}
     */
    form()
    {
        return [
          m('.Form-group', [
              m('label', app.translator.trans(localePrefix + 'renderMode')),
              m('div', Select.component({
                    options: {
                        Inline: app.translator.trans(localePrefix + 'inline'),
                        SideBySide: app.translator.trans(localePrefix + 'sideBySide')
                    },
                    onchange: this.setting(settingsPrefix + 'renderMode'),
                    value: this.setting(settingsPrefix + 'renderMode')()
                          || this.setting(settingsPrefix + 'renderMode')('Inline')
                })),
          ]),
          m('.Form-group', [
              m('label', app.translator.trans(localePrefix + 'displayMode')),
              m('div', Select.component({
                    options: {
                        customHTML: app.translator.trans(localePrefix + 'customHTML'),
                        tabularHTML: app.translator.trans(localePrefix + 'tabularHTML')
                    },
                    onchange: this.setting(settingsPrefix + 'displayMode'),
                    value: this.setting(settingsPrefix + 'displayMode')()
                          || this.setting(settingsPrefix + 'displayMode')('customHTML')
                })),
          ]),
          m('.Form-group', [
              m('label', Switch.component({
                    state: this.setting(settingsPrefix + 'separateBlock', '1')() === '1',
                    children: app.translator.trans(localePrefix + 'separateBlock'),
                    onchange: value => {
                        this.setting(settingsPrefix + 'separateBlock')(value ? '1' : '0');
                    }
              }))
          ]),
          m('.Form-group', [
            m('label', Switch.component({
              state: this.setting(settingsPrefix + 'allowSwitch', '1')() === '1',
              children: app.translator.trans(localePrefix + 'allowSwitch'),
              onchange: value => {
                this.setting(settingsPrefix + 'allowSwitch')(value ? '1' : '0');
              }
            }))
          ]),
          m('.Form-group', [
            m('label', Switch.component({
              state: this.setting(settingsPrefix + 'enableSyncScroll', '1')() === '1',
              children: app.translator.trans(localePrefix + 'enableSyncScroll'),
              onchange: value => {
                this.setting(settingsPrefix + 'enableSyncScroll')(value ? '1' : '0');
              }
            }))
          ]),
          m('.Form-group', [
              m('label', app.translator.trans(localePrefix + 'detailLevel')),
              m('div', Select.component({
                    options: {
                        none: app.translator.trans(localePrefix + 'noneLevel'),
                        line: app.translator.trans(localePrefix + 'lineLevel'),
                        word: app.translator.trans(localePrefix + 'wordLevel'),
                        char: app.translator.trans(localePrefix + 'charLevel')
                    },
                    onchange: this.setting(settingsPrefix + 'detailLevel'),
                    value: this.setting(settingsPrefix + 'detailLevel')()
                          || this.setting(settingsPrefix + 'detailLevel')('line')
                })),
          ]),
          m('.Form-group', [
            m('label', app.translator.trans(localePrefix + 'neighborLines')),
            m('.helpText', app.translator.trans(localePrefix + 'neighborLinesHelp')),
                m('div',
                    { className: 'helpText' },
                    m('i', {
                        className: 'diffSettingsIcon fas fa-exclamation-circle'
                    }),
                    m('span', app.translator.trans(localePrefix + 'onlyUnsigned')),
                ),
              m('input[type=text].FormControl', {
                    bidi: this.setting(settingsPrefix + 'neighborLines', '2'),
                    placeholder: '2'
                })
          ]),
          m('.Form-group', [
            m('div',
                { className: 'diffSettingsHelp helpText' },
                m('i', {
                    className: 'diffSettingsIcon fas fa-exclamation-circle'
                }),
                m('span', app.translator.trans(localePrefix + 'notice')),
            )
          ]),
        ];
    }
}
