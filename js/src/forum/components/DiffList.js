import app from 'flarum/app';
import Component from 'flarum/Component';
import DiffButton from './DiffButton';
import DiffModal from './DiffModal';
import LoadingIndicator from 'flarum/components/LoadingIndicator';

/**
 * The `DiffList` component displays a list of the post's diffs.
 */
export default class DiffList extends Component {
  init() {
    /**
     * Whether or not the diffs are loading.
     *
     * @type {Boolean}
     */
    this.loading = false;

    if(!this.diffItems) {
      /**
       * Initialize the itemList.
       *
       * @type {Array}
       */
      this.diffItems = [];
    }
  }

  view() {
    const largeModal = this.props.largeModal;

    return (
      <div className="DiffList">
        <div className="DiffList-header">
          <h4>
            {app.translator.trans('the-turk-diff.forum.revisionInfo', {
              revisionCount: this.props.post.revisionCount()
            })}
          </h4>
        </div>

        <div className="DiffList-content">
          <ul>
            {this.diffItems.length ? this.diffItems.map(diffs => {
              const items = [];

              diffs.forEach(diff => {
                items.push(diff);
              });

              return items.map(item => {
                return (
                  <li className="Diff">
                    {DiffButton.component({
                      item,
                      onclick: () => {
                        app.modal.show(new DiffModal({item}))
                      }
                    })}
                  </li>
                );
              });
            }) : ''}

            {
              this.loading ?
                LoadingIndicator.component({
                  className: 'LoadingIndicator--block'
                })
              : (this.diffItems.length ? '' :
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
  load() {
    this.loading = true;
    m.redraw();

    this.diffItems = [];
    const postId = this.props.post.id();

    return app.store.find('diff', postId)
      .then(this.parseResults.bind(this))
      .catch(() => {})
      .then(() => {
        this.loading = false;
        m.redraw();
      });
  }

  /**
   * Parse results and append them to the diff list.
   *
   * @param {Diff[]} results
   * @return {Diff[]}
   */
  parseResults(results) {
    if (results.length) this.diffItems.push(results);

    return results;
  }
}
