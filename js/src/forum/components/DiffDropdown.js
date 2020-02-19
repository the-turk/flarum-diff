import Dropdown from 'flarum/components/Dropdown';
import DiffList from './DiffList';
import icon from 'flarum/helpers/icon';

export default class DiffDropdown extends Dropdown {
      static initProps(props)
      {
        props.className = 'DiffDropdown';
        props.buttonClassName = 'Button Button--link';
        props.menuClassName = props.menuClassName;
        props.label = app.translator.trans('core.forum.post.edited_text');
        props.icon = 'fas fa-history';

        super.initProps(props);
      }

      init()
      {
          super.init();
          const post = this.props.post;
          const largeModal = this.props.largeModal;
          this.list = new DiffList({post});
      }

      getButton()
      {
          const vdom = super.getButton();

          vdom.attrs.title = this.props.label;
          vdom.attrs.onclick = this.onclick.bind(this);

          return vdom;
      }

      getButtonContent()
      {
          return [
            icon(this.props.icon, {className: 'Button-icon'}),
            <span className="Button-label">{this.props.label}</span>
          ];
      }

      getMenu()
      {
          return (
            <div className={'Dropdown-menu ' + this.props.menuClassName}>
              {this.showing ? this.list.render() : ''}
            </div>
          );
      }

      onclick()
      {
          this.list.load();
      }
}
