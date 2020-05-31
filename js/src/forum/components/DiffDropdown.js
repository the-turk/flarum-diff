import Dropdown from 'flarum/components/Dropdown';
import DiffList from './DiffList';
import icon from 'flarum/helpers/icon';

/**
 * The `DiffDropdown` component is the entrance point for this extension.
 * It's the component that you see when you click on "Edited" button.
 * It also contains DiffList components.
 */
export default class DiffDropdown extends Dropdown {
  static initProps(props) {
    props.className = 'DiffDropdown';
    props.buttonClassName = 'Button Button--link';
    props.menuClassName = props.menuClassName;
    props.label = app.translator.trans('the-turk-diff.forum.editedText');
    props.icon = 'fas fa-history';

    super.initProps(props);
  }

  init() {
    super.init();

    /**
     * The post that we're working with.
     *
     * @type {Post[]}
     */
    this.post = this.props.post;

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

    vdom.attrs.title = this.props.label;
    vdom.attrs.onclick = this.onclick.bind(this);

    return vdom;
  }

  getButtonContent() {
    return [
      icon(this.props.icon, {
        className: 'Button-icon',
      }),
      <span className="Button-label">{this.props.label}</span>,
    ];
  }

  getMenu() {
    return (
      <div className={'Dropdown-menu ' + this.props.menuClassName}>
        <div className="DiffList-header">
          <h4>
            {/* edited 1 time | edited x times */}
            {app.translator.transChoice('the-turk-diff.forum.revisionInfo', this.props.post.revisionCount(), {
              revisionCount: this.props.post.revisionCount(),
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
