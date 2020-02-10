import Button from 'flarum/components/Button';
import avatar from 'flarum/helpers/avatar';
import username from 'flarum/helpers/username';
import humanTime from 'flarum/helpers/humanTime';
import extractText from 'flarum/utils/extractText';

export default class DiffButton extends Button {
  view() {
    const attrs = Object.assign({}, this.props);

    delete attrs.item;

    attrs.type = 'button';

    return <button {...attrs}>{this.getButtonContent()}</button>;
  }

  /**
   * Get the template for the button's content.
   *
   * @return {*}
   * @protected
   */
  getButtonContent() {
    const diff = this.props.item;
    const editedInfo = extractText(app.translator.trans(
      'core.forum.post.edited_tooltip',
      {username: username(diff.actor()), ago: humanTime(diff.createdAt())}
    ));

    return [
      diff.actor().username() ? avatar(diff.actor()) : '',
      <span className="Button-label" title={editedInfo}>
        {editedInfo}
      </span>
    ];
  }
}
