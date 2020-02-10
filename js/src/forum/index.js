import app from 'flarum/app';
import {extend} from 'flarum/extend';
import CommentPost from 'flarum/components/CommentPost';
import Diff from './models/Diff';
import Post from 'flarum/models/Post';
import Model from 'flarum/Model';
import DiffDropdown from './components/DiffDropdown';


app.initializers.add('the-turk/diff', () => {
  app.store.models.diff = Diff;
  Post.prototype.revisionCount = Model.attribute('revisionCount');
  Post.prototype.canViewEditHistory = Model.attribute('canViewEditHistory');

  extend(CommentPost.prototype, 'headerItems', function(items) {
    const post = this.props.post;

    if (post.isEdited() && !post.isHidden()
          && post.canViewEditHistory() && post.revisionCount() > 0) {
      items.replace('edited', DiffDropdown.component({post}));
    }
  });
});
