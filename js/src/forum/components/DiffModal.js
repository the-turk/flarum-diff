import app from 'flarum/app';
import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';
import username from 'flarum/helpers/username';
import humanTime from 'flarum/helpers/humanTime';
import avatar from 'flarum/helpers/avatar';
import Alert from 'flarum/components/Alert';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import Dropdown from 'flarum/components/Dropdown';

export default class DiffModal extends Modal {
    init()
    {
        super.init();

        /**
         * Whether or not the component is loading.
         *
         * @type {Boolean}
         */
        this.loading = false;

        this.attributes = this.props.item.data.attributes;
    }

    className()
    {
        return 'DiffModal';
    }

    title()
    {
        return [
          this.props.item.actor().username() ? avatar(this.props.item.actor()) : '',
          app.translator.trans('core.forum.post.edited_tooltip', {
                username:
                  <a href={app.route.user(this.props.item.actor())} config={m.route}>
                    {username(this.props.item.actor())}
                  </a>,
                ago: humanTime(this.props.item.createdAt())
            })
        ];
    }

    config(isInitialized) {
        if (isInitialized) return;

        if (app.forum.attribute('diffRenderer') === 'Inline') {
            this.setModalContent('inline');
        } else {
            this.setModalContent('sideBySide');
        }
    }

    view()
    {
        return (
          <div className={'Modal modal-dialog ' + this.className()}>
            <div className="Modal-content">
                <div className="Modal-close App-backControl">
                  {(this.props.item.canDeleteEditHistory() ?
                    <Dropdown
                        className="diffCotrollerDropdown"
                        buttonClassName="Button Button--flat"
                        menuClassName="Dropdown-menu--right"
                        label={app.translator.trans('the-turk-diff.forum.optionsButton')}
                        onshow={() => this.$('.controlsContainer').addClass('open')}
                        onhide={() => this.$('.controlsContainer').removeClass('open')}>
                        {(this.props.item.isRevertable() ?
                              Button.component({
                                  children: app.translator.trans('the-turk-diff.forum.rollbackButton'),
                                  icon: 'fas fa-reply',
                                  onclick: () => {
                                      if (confirm(app.translator.trans('the-turk-diff.forum.confirmRollback'))) {
                                          this.toggleDeleteAndRollbackButtons('disable');
                                          this.loading = true;
                                          m.redraw();

                                          app.request({
                                              url: `${app.forum.attribute('apiUrl')}/diff/${this.props.item.id()}`,
                                              method: 'POST',
                                              data: {
                                                maxRevisionCount: this.props.post.revisionCount()
                                              }
                                          })
                                              .then(() => {
                                                  this.postRedrawer();
                                                  app.modal.close();
                                                  if (app.cache.diffs && app.cache.diffs[this.props.post.id()]) {
                                                      delete app.cache.diffs[this.props.post.id()];
                                                  }
                                                  this.showAlert('success', 'rollback');
                                              }).catch(() => {
                                                  this.toggleDeleteAndRollbackButtons('enable');
                                                  this.loading = false;
                                                  m.redraw();
                                                  this.postRedrawer();

                                                  this.showAlert('error', 'rollback');
                                              });
                                      }
                                  }
                              }) : ''
                        )}
                        {Button.component({
                            children: app.translator.trans('core.forum.post_controls.delete_button'),
                            icon: 'far fa-trash-alt',
                            onclick: () => {
                                if (confirm(app.translator.trans('the-turk-diff.forum.confirmDelete'))) {
                                    this.toggleDeleteAndRollbackButtons('disable');
                                    this.loading = true;
                                    m.redraw();

                                    this.props.item.delete().then(() => {
                                        app.modal.close();
                                        if (app.cache.diffs && app.cache.diffs[this.props.post.id()]) {
                                            delete app.cache.diffs[this.props.post.id()];
                                        }
                                        this.showAlert('success', 'delete');
                                    }).catch(() => {
                                        this.toggleDeleteAndRollbackButtons('enable');
                                        this.loading = false;
                                        m.redraw();

                                        this.showAlert('error', 'delete');
                                    });
                                }
                            }
                        })}
                    </Dropdown>
                  : '' )}
                  {Button.component({
                        icon: 'fas fa-times',
                        onclick: this.hide.bind(this),
                        className: 'Button Button--icon Button--link'
                    })}
                </div>

                <div className="Modal-header">
                  <h3 className="App-titleControl App-titleControl--text">{this.title()}</h3>
                </div>

                {this.content()}
            </div>
          </div>
        );
    }

    content()
    {
        return [
          app.forum.attribute('allowDiffSwitch') ?
            <div className="controlsContainer">
              <div className="diffSwitcher">
                  {Button.component({
                    icon: 'fas fa-grip-lines',
                    onclick: () => {
                      this.setModalContent('inline');
                    },
                    className: 'Button Button--icon Button--link inlineView'
                  })}
                  {Button.component({
                    icon: 'fas fa-columns',
                    onclick: () => {
                      this.setModalContent('sideBySide');
                    },
                    className: 'Button Button--icon Button--link sideBySideView'
                  })}
                  {Button.component({
                    icon: 'far fa-square',
                    onclick: () => {
                      this.setModalContent('combined');
                    },
                    className: 'Button Button--icon Button--link combinedView'
                  })}
              </div>
              <div className="diffController">

              </div>
            </div> : '',
          <div className="Modal-body">
            <div className="diffContainer"></div>
            {LoadingIndicator.component({className: 'DiffModal-loading' + (this.loading ? ' active' : '')})}
          </div>
        ];
    }

    /**
     * @param {string} type
     * @param {string} key
     */
    showAlert(type, key)
    {
        const message = {
            success: 'the-turk-diff.forum.' + key + 'SuccessMessage',
            error: 'the-turk-diff.forum.' + key + 'ErrorMessage',
        }[type];

        app.alerts.show(new Alert({
            type,
            children: app.translator.trans(message)
        }));
    }

    toggleDeleteAndRollbackButtons(state)
    {
        const $deleteButton = this.$('.DeleteButton');
        const $rollbackButton = this.$('.RollbackButton');

        if (state === 'disable') {
            $deleteButton.prop('disabled', true);
            $rollbackButton.prop('disabled', true);
        } else if (state === 'enable') {
            $deleteButton.prop('disabled', false);
            $rollbackButton.prop('disabled', false);
        }
    }

    renderHtml(content)
    {
        // do we need to worry about m.trust() function?
        // well, Flarum itself doing the same way for rendering
        // post items as seen on:
        // https://github.com/flarum/core/blob/afe06ea750cfd81767461a3884a92a26f0b0ce37/js/src/forum/components/CommentPost.js#L52
        // also, the diff library itself treat all inputs as plain text:
        // https://github.com/jfcherng/php-diff/issues/9#issuecomment-526808774
        // so no need to use additional Sanitizer lib for this operation.

        return m.trust(content);
    }

    /**
     * Redraw the post.
     * Workaround for:
     * https://discuss.flarum.org/d/22755-mithril-related-issues-on-poststream-items
     */
    postRedrawer()
    {
        return this.props.post.save({}).then(
            () => m.redraw()
        );
    }

    setModalContent(content)
    {
        let htmlContent;
        const $modalContent = this.$('.diffContainer');

        if (content === 'sideBySide') {
            htmlContent = this.renderHtml(this.attributes.sideBySideHtml);
            $modalContent.html(htmlContent);
            if(app.forum.attribute('enableDiffSyncScroll')) {
              this.syncScroll();
            }
            this.changeModalSize('large');
            this.$('.Button.sideBySideView').prop('disabled', true);
            this.$('.Button.inlineView').prop('disabled', false);
            this.$('.Button.combinedView').prop('disabled', false);
        } else if (content === 'inline') {
            htmlContent = this.renderHtml(this.attributes.inlineHtml);
            $modalContent.html(htmlContent);
            this.changeModalSize();
            this.$('.Button.sideBySideView').prop('disabled', false);
            this.$('.Button.inlineView').prop('disabled', true);
            this.$('.Button.combinedView').prop('disabled', false);
        } else if (content === 'combined') {
            htmlContent = this.renderHtml(this.attributes.combinedHtml);
            $modalContent.html(htmlContent);
            this.changeModalSize();
            this.$('.Button.sideBySideView').prop('disabled', false);
            this.$('.Button.inlineView').prop('disabled', false);
            this.$('.Button.combinedView').prop('disabled', true);
        }
    }

    changeModalSize(type = '')
    {
        const $modal = this.element;
        const className = $modal.className;

        if (type === 'large' && !className.includes('Modal--' + type))
        {
            $modal.className += ' Modal--large';
        } else if (className.includes('Modal--large')) {
            $modal.className = className.replace(' Modal--large', '');
        }
    }

    /**
     * Synchronize Scroll
     * implemented from:
     * https://stackoverflow.com/a/27007581
     * Should be working with Zepto.js
     */
    syncScroll()
    {
        const $el1 = this.$('.diff-side-item.left-item');
        const $el2 = this.$('.diff-side-item.right-item');

        // Lets us know when a scroll is organic
        // or forced from the synced element.
        let forcedScroll = false;

        // Catch our elements' scroll events and
        // syncronize the related element.
        $el1.scroll(function() { performScroll($el1, $el2); });
        $el2.scroll(function() { performScroll($el2, $el1); });

        // Perform the scroll of the synced element
        // based on the scrolled element.
        function performScroll($scrolled, $toScroll) {
            if (forcedScroll) return (forcedScroll = false);
            const percent = ($scrolled.scrollLeft() /
              ($scrolled[0].scrollWidth - $scrolled[0].offsetWidth)) * 100;
            setScrollTopFromPercent($toScroll, percent);
        }

        // Scroll to a position in the given
        // element based on a percent.
        function setScrollTopFromPercent($el, percent) {
            const scrollTopPos = (percent / 100) *
              ($el[0].scrollWidth - $el[0].offsetWidth);
            forcedScroll = true;
            $el.scrollLeft(scrollTopPos);
        }
    }
}
