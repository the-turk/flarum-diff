import Dropdown from 'flarum/components/Dropdown';
import DiffList from './DiffList';
import icon from 'flarum/helpers/icon';

/**
 * The `DiffDropdown` component is the entrance point for this extension.
 * It's the component that you see when you click on "Edited" button.
 * It also contains DiffList components.
 */
export default class DiffDropdown extends Dropdown {
  static initAttrs(props) {
    props.className = 'DiffDropdown';
    props.buttonClassName = 'Button Button--link';
    props.menuClassName = props.menuClassName;
    props.label = app.translator.trans('the-turk-diff.forum.editedText');
    props.icon = 'fas fa-history';

    super.initAttrs(props);
  }

  oninit(vnode) {
    super.oninit(vnode);

    /**
     * The post that we're working with.
     *
     * @type {Post[]}
     */
    this.post = this.attrs.post;

    /**
     * Create a new revision list.
     * This approach may not work with newer Mithril versions.
     *
     * @type {DiffList}
     */
    this.list = new DiffList({
      post: this.post,
      forModal: false,
      selectedItem: null,
      moreResults: null,
    });
  }

  getButton() {
    const vdom = super.getButton();

    vdom.attrs.title = this.attrs.label;
    vdom.attrs.onclick = this.onclick.bind(this);

    return vdom;
  }

  getButtonContent() {
    return [
      icon(this.attrs.icon, {
        className: 'Button-icon',
      }),
      <span className="Button-label">{this.attrs.label}</span>,
    ];
  }

  getMenu() {
    return (
      <div className={'Dropdown-menu ' + this.attrs.menuClassName}>
        <div className="DiffList-header">
          <h4>
            {/* edited 1 time | edited x times */}
            {app.translator.transChoice('the-turk-diff.forum.revisionInfo', this.attrs.post.revisionCount(), {
              revisionCount: this.attrs.post.revisionCount(),
            })}
          </h4>
        </div>
        {this.showing ? this.list.render() : ''}
      </div>
    );
  }

  /**
   * Load revision list.
   */
  onclick() {
    this.list.load();
  }
}
