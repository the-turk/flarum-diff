import app from 'flarum/app';
import Modal from 'flarum/components/Modal';
import username from 'flarum/helpers/username';
import humanTime from 'flarum/helpers/humanTime';
import avatar from 'flarum/helpers/avatar';

export default class DiffModal extends Modal {
  init() {
    super.init();
  }

  className() {
    const type = this.props.item.data.attributes.largeModal ? 'large' : 'medium';
    return 'DiffModal Modal--' + type;
  }

  title() {
    return [
      this.props.item.actor().username() ? avatar(this.props.item.actor()) : '',
      app.translator.trans('core.forum.post.edited_tooltip', {
        username:
          <a href={app.route.user(this.props.item.actor())} config={m.route}>
            {username(this.props.item.actor())}
          </a>,
        ago: humanTime(this.props.item.createdAt())
      })
    ];
  }

  content() {
    // do we need to worry about m.trust() function?
    // well, Flarum itself doing the same way for rendering
    // post items as seen on:
    // https://github.com/flarum/core/blob/afe06ea750cfd81767461a3884a92a26f0b0ce37/js/src/forum/components/CommentPost.js#L52
    // also, the diff library itself treat all inputs as plain text
    // just before creating JSON data:
    // https://github.com/jfcherng/php-diff/issues/9#issuecomment-526808774
    // so no need to use additional Sanitizer lib for this operation.
    return (
      <div className="Modal-body">
        {m.trust(this.props.item.data.attributes.contentHtml)}
      </div>
    );
  }
}
