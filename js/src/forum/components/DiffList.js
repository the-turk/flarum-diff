import app from 'flarum/app';
import Component from 'flarum/Component';
import DiffButton from './DiffButton';
import DiffModal from './DiffModal';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import extractText from 'flarum/utils/extractText';
import touchDevice from '../utils/touchDevice';
import redrawPost from '../utils/redrawPost';

/**
 * The `DiffList` component displays a list of the post's revisions.
 * It's been using on both DiffDropdown & DiffModal components.
 * It also contains DiffButton components.
 */
export default class DiffList extends Component {
  oninit(vnode) {
    super.oninit(vnode);
    /**
     * Whether or not the revisions are loading.
     *
     * @type {Boolean}
     */
    this.loading = false;

    /**
     * The post that we're working with.
     *
     * @type {Post[]}
     */
    this.post = this.attrs.post;

    /**
     * Whether or not there are more results that can be loaded.
     *
     * @type {Boolean|Null}
     */
    if (null !== this.attrs.moreResults) {
      this.moreResults = this.attrs.moreResults;
    } else {
      this.moreResults = false;
    }

    /**
     * Whether if this list for the DiffModal Component or not.
     * Because the DiffList also can be used for DiffDropdown.
     *
     * @type {Boolean}
     */
    this.forModal = this.attrs.forModal;

    /**
     * Whether there is a pre-selected revision or not.
     * If user clicks a revision in this list while DiffModal open,
     * we'll use this value to active & disable selected revision's
     * DiffButton component.
     *
     * @type {Number|Null}
     */
    this.selectedItem = this.attrs.selectedItem;

    if (!app.cache.diffs) {
      /**
       * Initialize the cache if it isn't already initialized.
       *
       * @type {Array}
       */
      app.cache.diffs = [];
    }
  }

  view() {
    const pages = app.cache.diffs[this.post.id()] || [];

    return (
      <div className="DiffList-container">
        <div className="DiffList-content">
          <ul>
            {pages.length
              ? pages.map((diffs) => {
                  const items = [];

                  // This allows us to use .map function
                  diffs.forEach((diff) => {
                    items.push(diff);
                  });

                  return items.map((item) => {
                    // we can use this class to customize all tooltips
                    // provided by this extension
                    const tooltipClass = 'diffTooltip';

                    let diffButton = DiffButton.component({
                      postDate: this.post.createdAt(),
                      subButton: false,
                      item,
                      onclick: () => {
                        if (!item.deletedAt()) {
                          app.modal.show(
                            new DiffModal({
                              item,
                              post: this.post,
                              moreResults: this.moreResults,
                            })
                          );

                          // fix for Chrome
                          // tooltips are not disappearing onclick
                          $('.' + tooltipClass).tooltip('hide');

                          if (this.forModal) {
                            // .DiffList-content container of clicked revision
                            const $listContainer = this.$('li#parentDiff' + item.id());

                            // disable clicked revision, enable others
                            $listContainer.find('button').prop('disabled', true);
                            $listContainer.siblings().find('button').prop('disabled', false);
                            // add 'active' class to clicked revision, remove it from others
                            $listContainer.siblings().removeClass('active');
                            $listContainer.addClass('active');
                          }
                        } else {
                          // if revision is deleted, we'll toggle the info
                          // like GitHub does.
                          this.toggleSubDiff(item.id());
                        }
                      },
                      oncreate: (vnode) =>
                        touchDevice() === false
                          ? $(vnode)
                              .tooltip({
                                trigger: 'hover',
                                placement: 'left',
                                container: 'body',
                              })
                              .attr(
                                'data-original-title',
                                extractText(
                                  item.revision() == this.post.revisionCount()
                                    ? // we're hovering on latest revision's button
                                      app.translator.trans('the-turk-diff.forum.tooltips.mostRecent')
                                    : item.revision() == 0
                                    ? // we're hovering on zeroth revision's button
                                      app.translator.trans('the-turk-diff.forum.tooltips.originalContent')
                                    : // we're hovering on other revision's button
                                      app.translator.trans('the-turk-diff.forum.tooltips.revisionWithNumber', {
                                        number: item.revision(),
                                      })
                                )
                              )
                              // this is a workaround for adding custom
                              // classes into bootstrap tooltips
                              // https://stackoverflow.com/a/29879041/12866913
                              .data('bs.tooltip')
                              .tip()
                              .addClass(item.deletedAt() ? tooltipClass + ' deletedDiffTooltip' : tooltipClass)
                          : '',
                    });

                    // returns the template for revision list items
                    return [
                      <li className={'Diff ParentDiff' + (item.deletedAt() ? ' DeletedDiff' : '')} id={'parentDiff' + item.id()}>
                        {diffButton}
                      </li>,
                      item.deletedAt() ? (
                        <li className="Diff SubDiff" id={'subDiff' + item.id()}>
                          {DiffButton.component({
                            postDate: this.post.createdAt(),
                            subButton: true,
                            item,
                          })}
                        </li>
                      ) : (
                        ''
                      ),
                    ];
                  });
                })
              : ''}
            {this.loading ? (
              LoadingIndicator.component({
                className: 'LoadingIndicator--block',
              })
            ) : !pages.length ? (
              <div className="DiffList-empty">{app.translator.trans('the-turk-diff.forum.emptyText')}</div>
            ) : (
              ''
            )}
          </ul>
        </div>
      </div>
    );
  }

  oncreate(vnode) {
    if (this.forModal && this.selectedItem) {
      let $selectedItem = this.$('li#parentDiff' + this.selectedItem);
      $selectedItem.find('button').prop('disabled', true);
      $selectedItem.addClass('active');
    }

    const $revisions = this.$('.DiffList-content');
    const $scrollParent = $revisions.css('overflow') === 'auto' ? $revisions : $(window);

    // Lazy-loading implementation for the revision list
    // simply checks if we're bottom of the list
    // and if there are more results to show
    const scrollHandler = () => {
      const scrollTop = $scrollParent.scrollTop();
      const viewportHeight = $scrollParent.height();
      const contentTop = $scrollParent === $revisions ? 0 : $revisions.offset().top;
      const contentHeight = $revisions[0].scrollHeight;

      if (this.moreResults && !this.loading && scrollTop + viewportHeight >= contentTop + contentHeight) {
        this.loadMore();
      }
    };

    $scrollParent.on('scroll', scrollHandler);

    context.onunload = () => {
      $scrollParent.off('scroll', scrollHandler);
    };
  }

  /**
   * Load revisions.
   *
   * @public
   */
  load() {
    // don't do anthing if we already cached revisions for the post.
    // lazy-loading will perform loadMore() if there are moreResults
    if (app.cache.diffs[this.post.id()]) return this.redrawList();

    this.loadMore();
  }

  /**
   * Load the next page of revision results.
   *
   * @public
   */
  loadMore() {
    this.loading = true;
    this.redrawList();

    // don't do anthing if we already cached ALL revisions for the post.
    if (app.cache.diffs[this.post.id()] && app.cache.diffs[this.post.id()].length == this.post.revisionCount()) {
      return;
    }

    // set URL parameters
    const params = app.cache.diffs[this.post.id()]
      ? {
          id: this.post.id(),
          page: {
            offset: app.cache.diffs[this.post.id()].length * 10,
          },
        }
      : {
          id: this.post.id(),
        };

    return app.store
      .find('diff', params)
      .then(this.parseResults.bind(this))
      .catch(() => {})
      .then(() => {
        this.loading = false;
        this.redrawList();
      });
  }

  /**
   * Parse results and append them to the revision list.
   *
   * @param {Diff[]} results
   * @return {Diff[]}
   */
  parseResults(results) {
    app.cache.diffs[this.post.id()] = app.cache.diffs[this.post.id()] || [];

    if (results.length) app.cache.diffs[this.post.id()].push(results);

    this.moreResults = !!results.payload.links.next;

    return results;
  }

  /**
   * Toggle the deleted revision's information (sub-button).
   *
   * @param {Number} id
   */
  toggleSubDiff(id) {
    const $subDiff = this.$('li.Diff#subDiff' + id);
    const $parentDiff = this.$('li.Diff#parentDiff' + id);
    const $icon = $parentDiff.find('.icon');

    $subDiff.toggle();

    // switch caret icon onClick
    if ($icon.hasClass('fa-caret-down')) {
      $icon.removeClass('fa-caret-down').addClass('fa-caret-up');
    } else {
      $icon.removeClass('fa-caret-up').addClass('fa-caret-down');
    }
  }

  /**
   * Redraw the list based on parent component.
   */
  redrawList() {
    m.redraw();

    // because we don't need to redraw the post
    // to update DiffList in DiffModal.
    // We just need it for updating DiffDropdown.
    if (this.forModal) return;

    return redrawPost(this.post);
  }
}
