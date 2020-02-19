import app from 'flarum/app';
import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';
import username from 'flarum/helpers/username';
import humanTime from 'flarum/helpers/humanTime';
import avatar from 'flarum/helpers/avatar';
import Alert from 'flarum/components/Alert';
import LoadingIndicator from 'flarum/components/LoadingIndicator';

export default class DiffModal extends Modal {
    init()
    {
        super.init();

        /**
         * Whether or not the component is loading.
         *
         * @type {Boolean}
         */
        this.loading = false;
    }

    className()
    {
        const type = this.props.item.data.attributes.largeModal ? 'large' : 'medium';
        return 'DiffModal Modal--' + type;
    }

    title()
    {
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

    view()
    {
        return (
          <div className={'Modal modal-dialog ' + this.className()}>
            <div className="Modal-content">
                <div className="Modal-close App-backControl">
                  {(this.props.item.data.attributes.canDeleteEditHistory ?
                        Button.component({
                            icon: 'fas fa-trash-alt',
                            onclick: () => {
                                if (confirm(app.translator.trans('the-turk-diff.forum.confirmDelete'))) {
                                    this.toggleDeleteButton('disable');
                                    this.loading = true;
                                    m.redraw();

                                    this.props.item.delete().then(() => {
                                        app.modal.close();
                                        if (app.cache.diffs && app.cache.diffs[this.props.post.id()]) {
                                            delete app.cache.diffs[this.props.post.id()];
                                        }
                                        this.showDeletionAlert('success');
                                    }).catch(() => {
                                        this.toggleDeleteButton('enable');
                                        this.loading = false;
                                        m.redraw();

                                        this.showDeletionAlert('error');
                                    });
                                }
                            },
                            className: 'Button DeleteButton Button--icon Button--link'
                        }) : ''
                  )}

                  {Button.component({
                        icon: 'fas fa-times',
                        onclick: this.hide.bind(this),
                        className: 'Button Button--icon Button--link'
                    })}
                </div>

                <div className="Modal-header">
                  <h3 className="App-titleControl App-titleControl--text">{this.title()}</h3>
                </div>

                {this.content()}
            </div>
          </div>
        );
    }

    content()
    {
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
            {LoadingIndicator.component({className: 'DiffModal-loading' + (this.loading ? ' active' : '')})}
          </div>
        );
    }

    /**
     * Show deletion alert of diff.
     *
     * @param {string} type
     */
    showDeletionAlert(type)
    {
        const message = {
            success: 'the-turk-diff.forum.deleteSuccessMessage',
            error: 'the-turk-diff.forum.deleteErrorMessage',
        }[type];

        app.alerts.show(new Alert({
            type,
            children: app.translator.trans(message)
        }));
    }

    toggleDeleteButton(state)
    {
        const $deleteButton = this.$('.DeleteButton');

        if (state === 'disable') {
            $deleteButton.prop('disabled', true);
        } else if (state === 'enable') {
            $deleteButton.prop('disabled', false);
        }
    }
}
