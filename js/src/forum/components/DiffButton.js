import Button from 'flarum/components/Button';
import avatar from 'flarum/helpers/avatar';
import icon from 'flarum/helpers/icon';
import username from 'flarum/helpers/username';
import humanTime from 'flarum/helpers/humanTime';
import extractText from 'flarum/utils/extractText';

export default class DiffButton extends Button {
    view()
    {
        const attrs = Object.assign({}, this.props);

        delete attrs.item;
        delete attrs.subButton;

        attrs.type = 'button';

        return <button {...attrs}>{this.getButtonContent()}</button>;
    }

  /**
   * Get the template for the button's content.
   *
   * @return {*}
   * @protected
   */
    getButtonContent()
    {
        const diff = this.props.item;

        let actor = diff.actor();
        let editedInfo = extractText(app.translator.trans(
            'core.forum.post.edited_tooltip',
            {username: username(diff.actor()), ago: humanTime(diff.createdAt())}
        ));

        if (diff.deletedAt()) {
            if (this.props.subButton === false) {
                editedInfo = editedInfo + ' ' + app.translator.trans('the-turk-diff.forum.deletedText');
            } else {
                actor = diff.deletedUser();
                editedInfo = extractText(app.translator.trans(
                    'the-turk-diff.forum.deletedTooltip',
                    {username: username(diff.deletedUser()), ago: humanTime(diff.deletedAt())}
                ));
            }
        }

        return [
            actor.username() ? avatar(actor) : '',
            diff.deletedAt() && this.props.subButton === false ?
              icon('fas fa-caret-down', {className: 'Button-caret'}) : '',
            <span className="Button-label" title={editedInfo}>
              {diff.deletedAt() && this.props.subButton === true ?
                    <em>
                    {editedInfo}
                    </em> : editedInfo}
            </span>
        ];
    }
}
