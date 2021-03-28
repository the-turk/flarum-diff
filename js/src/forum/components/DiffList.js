import app from 'flarum/common/app';
import Component from 'flarum/common/Component';
import DiffButton from './DiffButton';
import DiffModal from './DiffModal';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import extractText from 'flarum/common/utils/extractText';
import touchDevice from '../utils/touchDevice';

/**
 * The `DiffList` component displays a list of the post's revisions.
 * It's been using on both DiffDropdown & DiffModal components.
 * It also contains DiffButton components.
 */
export default class DiffList extends Component {
  view() {
    const state = this.attrs.state;
    const pages = app.cache.diffs[state.post.id()] || [];

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
                      postDate: state.post.createdAt(),
                      subButton: false,
                      item,
                      onclick: () => {
                        if (!item.deletedAt()) {
                          state.selectedItem = item;
                          app.modal.show(DiffModal, { listState: state });

                          // fix for Chrome
                          // tooltips are not disappearing onclick
                          $('.' + tooltipClass).tooltip('hide');

                          if (state.forModal) {
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
                                  item.revision() == state.post.revisionCount()
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
                            postDate: state.post.createdAt(),
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
            {state.loading ? (
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
    super.oncreate(vnode);
    const state = this.attrs.state;

    if (state.forModal && state.selectedItem) {
      let $selectedItem = this.$('li#parentDiff' + state.selectedItem);
      $selectedItem.find('button').prop('disabled', true);
      $selectedItem.addClass('active');
    }

    const $revisions = this.$('.DiffList-content');
    this.$scrollParent = $revisions.css('overflow') === 'auto' ? $revisions : $(window);

    // Lazy-loading implementation for the revision list
    // simply checks if we're bottom of the list
    // and if there are more results to show
    this.scrollHandler = () => {
      const scrollTop = $scrollParent.scrollTop();
      const viewportHeight = $scrollParent.height();
      const contentTop = $scrollParent === $revisions ? 0 : $revisions.offset().top;
      const contentHeight = $revisions[0].scrollHeight;

      if (state.moreResults && !state.loading && scrollTop + viewportHeight >= contentTop + contentHeight) {
        state.loadMore();
      }
    };

    this.$scrollParent.on('scroll', this.scrollHandler);
  }

  onremove(vnode) {
    this.$scrollParent.off('scroll', this.scrollHandler);
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
}
