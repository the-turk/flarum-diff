import app from 'flarum/app';
import Component from 'flarum/Component';
import DiffButton from './DiffButton';
import DiffModal from './DiffModal';
import LoadingIndicator from 'flarum/components/LoadingIndicator';

/**
 * The `DiffList` component displays a list of the post's diffs.
 */
export default class DiffList extends Component {
    init()
    {
        /**
         * Whether or not the diffs are loading.
         *
         * @type {Boolean}
         */
        this.loading = false;

        if (!app.cache.diffs) {
            /**
             * Initialize the cache.
             *
             * @type {Array}
             */
            app.cache.diffs = [];
        }
    }

    view()
    {
        const post = this.props.post;
        const pages = app.cache.diffs[post.id()] || [];
        const postRevisionCount = post.revisionCount();

        return (
          <div className="DiffList">
            <div className="DiffList-header">
              <h4>
                {app.translator.transChoice('the-turk-diff.forum.revisionInfo', postRevisionCount, {
                    revisionCount: postRevisionCount
                })}
              </h4>
            </div>

            <div className="DiffList-content">
              <ul>
                {pages.length ? pages.map(diffs => {
                    const items = [];

                    diffs.forEach(diff => {
                        items.push(diff);
                    });

                  return items.map(item => {
                        let diffButton = DiffButton.component({
                            subButton: false,
                            item,
                            onclick: () => {
                                if (!item.deletedAt()) {
                                    app.modal.show(new DiffModal({item, post}));
                                } else {
                                    this.toggleSubDiff(item.id());
                                }
                            }
                        });
                    return (
                      <div className="DiffList-holder">
                        <li className={'Diff ParentDiff' + (item.deletedAt() ? ' has-sub' : '')} id={'parentDiff' + item.id()}>
                          {diffButton}
                        </li>
                        {item.deletedAt() ?
                            <li className="Diff SubDiff" id={'subDiff' + item.id()} style="display:none;">
                                {DiffButton.component({item, subButton: true})}
                            </li>
                            : ''}
                      </div>
                    );
                    });
                }) : ''}

                {
                    this.loading ?
                    LoadingIndicator.component({
                        className: 'LoadingIndicator--block'
                    })
                  : (pages.length ? '' :
                      <div className="DiffList-empty">
                        {app.translator.trans('the-turk-diff.forum.emptyText')}
                      </div>
                    )
                }
              </ul>
            </div>
          </div>
        );
    }

    /**
     * Load diff results.
     *
     * @public
     */
    load()
    {
        if (app.cache.diffs[this.props.post.id()]) {
            m.redraw();
            // also redraw the post because it sometimes
            // appears and sometimes doesn't after editing a post
            return this.postRedrawer();
        }

        this.loading = true;
        m.redraw(); // redraw for this view()
        this.postRedrawer();

        const postId = this.props.post.id();

        return app.store.find('diff', postId)
          .then(this.parseResults.bind(this))
          .catch(() => {})
          .then(() => {
                this.loading = false;
                m.redraw(); // redraw for this view()
                this.postRedrawer();
            });
    }

    /**
     * Parse results and append them to the diff list.
     *
     * @param {Diff[]} results
     * @return {Diff[]}
     */
    parseResults(results)
    {
        app.cache.diffs[this.props.post.id()] = app.cache.diffs[this.props.post.id()] || [];

        if (results.length) {
            app.cache.diffs[this.props.post.id()].push(results);
        }

        return results;
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

    /**
     * @param id
     */
    toggleSubDiff(id)
    {
        const $subDiff = this.$('.DiffList-holder #subDiff'+id);
        const $parentDiff = this.$('.DiffList-holder #parentDiff'+id);
        const $icon = $parentDiff.find('.icon');

        $subDiff.toggle();

        if ($icon.hasClass('fa-caret-down')) {
            $icon.removeClass('fa-caret-down').addClass('fa-caret-up');
        } else {
            $icon.removeClass('fa-caret-up').addClass('fa-caret-down');
        }
    }
}
