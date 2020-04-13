import app from 'flarum/app';
import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';
import username from 'flarum/helpers/username';
import humanTime from 'flarum/helpers/humanTime';
import avatar from 'flarum/helpers/avatar';
import extractText from 'flarum/utils/extractText';
import touchDevice from '../utils/touchDevice';
import redrawPost from '../utils/redrawPost';
import Alert from 'flarum/components/Alert';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import Dropdown from 'flarum/components/Dropdown';
import DiffList from './DiffList';

/**
 * The `DiffModal` component is the main component of this extension.
 * It also contains DiffList components.
 */
export default class DiffModal extends Modal {
  init() {
    super.init();

    /**
     * Whether or not the modal is loading.
     *
     * @type {Boolean}
     */
    this.loading = false;

    /**
     * Whether the modal is showing or not.
     *
     * @type {Boolean}
     */
    this.showing = false;

    /**
     * We will use this to change modal's content when
     * user clicks on a revision on the list.
     *
     * @type {Number|Null}
     */
    this.diffId = null;

    /**
     * The post that we're working with.
     *
     * @type {Post[]}
     */
    this.post = this.props.post;

     /**
      * This is the current revision object.
      *
      * @type {Diff[]}
      */
     this.revision = this.props.item;

     /**
      * Create a new revision list.
      * This approach may not work with newer Mithril versions.
      *
      * @type {DiffList}
      */
      this.list = new DiffList({
        post: this.post,
        forModal: true,
        selectedItem: this.revision.id(),
        moreResults: this.props.moreResults
      });

     /**
      * This holds information about which revisions are subjects for comparison.
      *
      * @type {Object}
      */
     this.comparisonBetween = JSON.parse(this.revision.comparisonBetween());
  }

  className() {
    return 'DiffModal';
  }

  title() {
    return [
      // we also should consider deleted users here
      this.revision.actor().username() ? avatar(this.revision.actor()) : '',
      this.revision.revision() != 0 ?
      // x edited y ago
      app.translator.trans('core.forum.post.edited_tooltip', {
        username:
          <a href={app.route.user(this.revision.actor())} config={m.route}>
            {username(this.revision.actor())}
          </a>,
        ago: humanTime(this.revision.createdAt())
      }) :
      // x created y ago
      app.translator.trans('the-turk-diff.forum.createdTooltip', {
        username:
          <a href={app.route.user(this.revision.actor())} config={m.route}>
            {username(this.revision.actor())}
          </a>,
        ago: humanTime(this.post.createdAt())
      })
    ];
  }

  config(isInitialized) {
    // workaround for missing 'in' class on .ModalManager
    // after redrawing the DiffList component.
    // because i'm done with this shit.
    // https://github.com/flarum/core/pull/2080
    if (this.showing && !$('.ModalManager').hasClass('in')) $('.ModalManager').addClass('in');

    // we should re-Initialize this component after user
    // clicks a different revision while modal is open
    if (isInitialized && this.diffId == this.revision.id()) return;

    this.showing = true;
    this.diffId = this.revision.id();

    if (this.revision.revision() != 0 &&
      (this.comparisonBetween.new.revision != this.comparisonBetween.old.revision)) {
      // we'll use Side By Side renderer as a fallback
      // if there is no renderer choice
      return this.setDiffContent(
        app.session.user.preferences().diffRenderer ?
        app.session.user.preferences().diffRenderer :
        'sideBySide'
      );
    } else {
      return this.setDiffContent('preview');
    }
  }

  view() {
    return (
      <div className={'Modal modal-dialog ' + this.className()}>
        <div className="Modal-content">
          <div className="Modal-close App-backControl">
            {Button.component({
              icon: 'fas fa-times',
              onclick: this.hide.bind(this),
              className: 'Button Button--icon Button--link'
            })}
          </div>
          {
            // Revision Options Button
          }
          {((this.post.canDeleteEditHistory() &&
              this.revision.revision() != this.post.revisionCount()) ||
              this.post.canRollbackEditHistory() ?
            <Dropdown
              className="diffCotrollerDropdown App-primaryControl"
              icon="fas fa-ellipsis-v"
              buttonClassName="Button"
              menuClassName="Dropdown-menu--right"
              label={app.translator.trans('the-turk-diff.forum.optionsButton')}>

              {
                // Rollback
                // there must be a revision to rollback,
                // as we can't rollback to current post.
              }
              {(this.post.canRollbackEditHistory() && this.comparisonBetween.old.diffId ?
                Button.component({
                  children:
                    this.revision.revision() == 0 ?
                      /* we're viewing the original content */
                      app.translator.trans(
                        'the-turk-diff.forum.rollbackToOriginalButton'
                      ) :
                      this.revision.revision() == this.post.revisionCount() ?
                        (this.comparisonBetween.old.revision != 0 ?
                          /* we're comparing this revision with current content. */
                          app.translator.trans(
                            'the-turk-diff.forum.revertChangesButton'
                          ) :
                          /* we're comparing this revision with original content */
                          app.translator.trans(
                            'the-turk-diff.forum.rollbackToOriginalButton'
                          )
                        ) :
                        /* we're comparing this revision with another revision */
                        app.translator.trans(
                          'the-turk-diff.forum.rollbackButton',
                          {
                            number: this.revision.revision()
                          }
                        ),
                  icon: 'fas fa-reply',
                  onclick: () => {
                    if (confirm(app.translator.trans(
                        'the-turk-diff.forum.confirmRollback',
                        {
                          number: this.revision.revision()
                        }
                      ))) {
                      this.loading = true;
                      m.redraw();

                      let rollbackTo =
                        this.revision.revision() == this.post.revisionCount() ?
                        this.comparisonBetween.old.diffId :
                        this.revision.id();

                      app.request({
                          url: `${app.forum.attribute('apiUrl')}/diff/${rollbackTo}`,
                          method: 'POST'
                        })
                        .then(() => {
                          redrawPost(this.post);
                          app.modal.close();

                          if (app.cache.diffs && app.cache.diffs[this.post.id()]) {
                            delete app.cache.diffs[this.post.id()];
                          }

                          this.showAlert('success', 'rollback');
                        })
                        .catch(() => {
                          this.loading = false;
                          m.redraw();
                          redrawPost(this.post);

                          this.showAlert('error', 'rollback');
                        });
                    }
                  }
                }) : ''
              )}

              {
                // Delete
                // you can't delete last item on the list
                // because it's the current post actually.
              }
              {(this.post.canDeleteEditHistory() &&
                this.revision.revision() != this.post.revisionCount() ?
                Button.component({
                  children: app.translator.trans('core.forum.post_controls.delete_button'),
                  icon: 'far fa-trash-alt',
                  onclick: () => {
                    if (confirm(app.translator.trans('the-turk-diff.forum.confirmDelete'))) {
                      this.loading = true;
                      m.redraw();

                      this.revision.delete().then(() => {
                        app.modal.close();

                        if (app.cache.diffs && app.cache.diffs[this.post.id()]) {
                          delete app.cache.diffs[this.post.id()];
                        }

                        this.showAlert('success', 'delete');
                      }).catch(() => {
                        this.loading = false;
                        m.redraw();

                        this.showAlert('error', 'delete');
                      });
                    }
                  }
                }) : ''
              )}
            </Dropdown>
          : '')}

        <div className="Modal-header">
          <h3 className="App-titleControl App-titleControl--text">
            {this.title()}
          </h3>
        </div>
        {this.content()}
        </div>
      </div>
    );
  }

  content() {
    // we can use this class to customize all tooltips
    // provided by this extension
    const tooltipClass = 'diffTooltip';

    return [
      <div className="diff-grid">
        {/* Renderer Switcher Container */}
        <div className="diff-grid-item diff-grid-controls">
          <div className="diffSwitcher">
            {this.revision.revision() != 0 &&
              (this.comparisonBetween.new.revision != this.comparisonBetween.old.revision) ?
              [
                <div className="tooltip-wrapper"
                  data-original-title={app.translator.trans('the-turk-diff.forum.inline')}>
                  {Button.component({
                    icon: 'fas fa-grip-lines',
                    onclick: () => {
                      // fix for Chrome
                      // tooltips are not disappearing onclick
                      this.$('.' + tooltipClass).tooltip('hide');

                      this.setDiffContent('inline');
                    },
                    className: 'Button Button--icon Button--link inlineView',
                    config: (elm, isInitialized) => touchDevice() === false && !isInitialized ?
                      $(elm).parent().tooltip({
                        trigger: 'hover'
                      })
                      // this is a workaround for adding custom
                      // classes into bootstrap tooltips
                      // https://stackoverflow.com/a/29879041/12866913
                      .data('bs.tooltip').tip()
                      .addClass(tooltipClass) : ''
                  })}
                </div>,
                <div className="tooltip-wrapper"
                  data-original-title={app.translator.trans('the-turk-diff.forum.sideBySide')}>
                  {Button.component({
                    icon: 'fas fa-columns',
                    onclick: () => {
                      this.$('.' + tooltipClass).tooltip('hide');
                      this.setDiffContent('sideBySide');
                    },
                    className: 'Button Button--icon Button--link sideBySideView',
                    config: (elm, isInitialized) => touchDevice() === false && !isInitialized ?
                      $(elm).parent().tooltip({
                        trigger: 'hover'
                      })
                      .data('bs.tooltip').tip()
                      .addClass(tooltipClass) : ''
                  })}
                </div>,
                <div className="tooltip-wrapper"
                  data-original-title={app.translator.trans('the-turk-diff.forum.combined')}>
                  {Button.component({
                    icon: 'far fa-square',
                    onclick: () => {
                      this.$('.' + tooltipClass).tooltip('hide');
                      this.setDiffContent('combined');
                    },
                    className: 'Button Button--icon Button--link combinedView',
                    config: (elm, isInitialized) => touchDevice() === false && !isInitialized ?
                      $(elm).parent().tooltip({
                        trigger: 'hover'
                      })
                      .data('bs.tooltip').tip()
                      .addClass(tooltipClass) : ''
                  })}
                </div>
              ] : ''}
              <div className="tooltip-wrapper"
                data-original-title={app.translator.trans('core.forum.composer.preview_tooltip')}>
                {Button.component({
                  icon: 'far fa-eye',
                  onclick: () => {
                    this.$('.' + tooltipClass).tooltip('hide');
                    this.setDiffContent('preview');
                  },
                  className: 'Button Button--icon Button--link diffPreview',
                  config: (elm, isInitialized) => touchDevice() === false && !isInitialized ?
                    $(elm).parent().tooltip({
                      trigger: 'hover'
                    }).attr(
                      'data-original-title',
                      app.translator.trans('core.forum.composer.preview_tooltip')
                    )
                    .data('bs.tooltip').tip()
                    .addClass(tooltipClass) : ''
                })}
              </div>
            </div>
          </div>

          {/* Comparison Info Container */}
          <div className="diff-grid-item diff-grid-info">
            <div className="revisionInfo">
              <h4>
                {app.translator.transChoice(
                  'the-turk-diff.forum.revisions',
                  this.post.revisionCount(),
                  {
                    revisionCount: this.post.revisionCount()
                  }
                )}
              </h4>
              <p class="diffInfoContainer"/>
            </div>
          </div>

          {/* Revision List Container */}
          <div className="diff-grid-item diff-grid-revisions">
            {this.list.render()}
          </div>

          {/* Diffs Container */}
          <div className="diff-grid-item diff-grid-diff">
            <div className="diffContents">
              {
                // .previewContainer is hidden by default
                // we'll do some nasty switches later
              }
              <div className="previewContainer Post-body">
                {this.renderHtml(this.revision.data.attributes.previewHtml)}
              </div>
              <div className="diffContainer"/>
            </div>
          </div>
          {LoadingIndicator.component({
            className: 'DiffModal-loading' + (this.loading ? ' active' : '')
          })}
      </div>
    ];
  }

  /**
   * Slowly scroll to selected revision.
   */
  onready() {
    const $revisions = this.$('.DiffList-content');
    let $selectedItem = this.$('li#parentDiff' + this.revision.id());

    $revisions.animate({
      scrollTop: $selectedItem.offset().top - $revisions.offset().top + $revisions.scrollTop()
    });
  }

  /**
   * Show success and error messages for rollback and delete operations.
   *
   * @param {string} type
   * @param {string} key
   */
  showAlert(type, key) {
    const message = {
      success: 'the-turk-diff.forum.' + key + 'SuccessMessage',
      error: 'the-turk-diff.forum.' + key + 'ErrorMessage',
    } [type];

    app.alerts.show(new Alert({
      type,
      children: app.translator.trans(message)
    }));
  }

  /**
   * Render the diff views provided by external lib.
   *
   * do we need to worry about m.trust() function?
   * well, Flarum itself doing the same way for rendering
   * post items as seen on CommentPost.js#L52
   * also, the diff library itself treat all inputs as plain text:
   * https://github.com/jfcherng/php-diff/issues/9#issuecomment-526808774
   * so no need to use additional Sanitizer lib for this operation.
   *
   * @param {string} content
   */
  renderHtml(content) {
    return m.trust(content);
  }

  /**
   * Insert rendered diff views into their container
   * and disable active views' buttons.
   * Disabling buttons is just for indicating
   * so frontend looks good but the backend sucks.
   *
   * @param {string} contentType
   */
  setDiffContent(contentType) {
    let diffContentHtml;
    const $diffContainer = this.$('.diffContainer');
    const $previewContainer = this.$('.previewContainer');
    const $tooltip = this.$('.diffTooltip');

    // buttons
    const $sideBySideButton = this.$('.Button.sideBySideView');
    const $inlineButton = this.$('.Button.inlineView');
    const $combinedButton = this.$('.Button.combinedView');
    const $previewButton = this.$('.Button.diffPreview');

    if (contentType !== 'preview') {
      if (contentType === 'sideBySide') {
        diffContentHtml = this.renderHtml(
          this.revision.data.attributes.sideBySideHtml
        );
        $sideBySideButton.prop('disabled', true);
        // what a dynasty - LOL
        $sideBySideButton.parent().siblings().children().prop('disabled', false);
      } else if (contentType === 'inline') {
        diffContentHtml = this.renderHtml(
          this.revision.data.attributes.inlineHtml
        );
        $inlineButton.prop('disabled', true);
        $inlineButton.parent().siblings().children().prop('disabled', false);
      } else if (contentType === 'combined') {
        diffContentHtml = this.renderHtml(
          this.revision.data.attributes.combinedHtml
        );
        $combinedButton.prop('disabled', true);
        $combinedButton.parent().siblings().children().prop('disabled', false);
      }
    } else {
      $diffContainer.hide();
      this.$('.previewContainer').show();

      $previewButton.prop('disabled', true);
      $previewButton.parent().siblings().children().prop('disabled', false);
      return this.setInfoContent(true);
    }

    if (diffContentHtml) {
      $diffContainer.html(diffContentHtml);

      if ($previewContainer.is(':visible')) {
        $diffContainer.show();
        $previewContainer.hide();
      }

      // let's remember their renderer choice
      app.session.user.savePreferences({
        'diffRenderer': contentType
      });

      return this.setInfoContent();
    }

    return;
  }

  /**
   * Set informations about comparisons.
   *
   * @param {Boolean} preview
   */
  setInfoContent(preview = false) {
    const $infoContainer = this.$('.diffInfoContainer');

    let infoContentHtml = !preview && this.revision.revision() != 0 &&
      (this.comparisonBetween.new.revision != this.comparisonBetween.old.revision) ?
      extractText(app.translator.trans(
        'the-turk-diff.forum.differences',
        {
          old:
            this.comparisonBetween.old.revision == -1 ?
              /* we're viewing differences between current content and {new} */
              app.translator.trans(
                'the-turk-diff.forum.currentContent'
              ) :
              this.comparisonBetween.old.revision == 0 ?
                /* we're viewing differences between original content and {new} */
                app.translator.trans(
                  'the-turk-diff.forum.originalContent'
                ) :
                /* we're viewing differences between revision X and {new} */
                app.translator.trans(
                  'the-turk-diff.forum.revisionWithNumber', {
                    number: this.comparisonBetween.old.revision
                  }
                ),
          new:
            this.comparisonBetween.new.revision == 0 ?
              /* we're viewing differences between {old} and original content */
              app.translator.trans(
                'the-turk-diff.forum.originalContent'
              ) :
              this.comparisonBetween.new.revision == this.post.revisionCount() ?
                /* we're viewing differences between {old} and current content */
                app.translator.trans(
                  'the-turk-diff.forum.currentContent'
                ) :
                /* we're viewing differences between {old} and revision X */
                app.translator.trans(
                  'the-turk-diff.forum.revisionWithNumber', {
                    number: this.comparisonBetween.new.revision
                  }
                )
        }
      )) :
      extractText(app.translator.trans(
        'the-turk-diff.forum.previewMode',
        {
          content: this.comparisonBetween.new.revision == 0 ?
            /* we're previewing original content */
            app.translator.trans(
              'the-turk-diff.forum.originalContent'
            ) :
            this.comparisonBetween.new.revision == this.post.revisionCount() ?
              /* we're previewing current content */
              app.translator.trans(
                'the-turk-diff.forum.currentContent'
              ) :
              /* we're previewing revision X */
              app.translator.trans(
                'the-turk-diff.forum.revisionWithNumber', {
                  number: this.comparisonBetween.new.revision
                }
              )
        }
      ));

    return $infoContainer.html(infoContentHtml);
  }
}
