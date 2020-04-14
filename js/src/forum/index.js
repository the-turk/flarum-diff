import app from 'flarum/app';
import { extend } from 'flarum/extend';
import CommentPost from 'flarum/components/CommentPost';
import Diff from './models/Diff';
import Post from 'flarum/models/Post';
import Model from 'flarum/Model';
import DiffDropdown from './components/DiffDropdown';
import DiscussionPage from 'flarum/components/DiscussionPage';

app.initializers.add('the-turk/diff', () => {
  app.store.models.diff = Diff;
  Post.prototype.revisionCount = Model.attribute('revisionCount');
  Post.prototype.canViewEditHistory = Model.attribute('canViewEditHistory');
  Post.prototype.canRollbackEditHistory = Model.attribute('canRollbackEditHistory');
  Post.prototype.canDeleteEditHistory = Model.attribute('canDeleteEditHistory');

  extend(CommentPost.prototype, 'headerItems', function(items) {
    const post = this.props.post;

    // replace "edited" text to "edited" button
    if (post.isEdited() && !post.isHidden() &&
      post.canViewEditHistory() && post.revisionCount() > 0) {
      items.replace('edited', DiffDropdown.component({post}));
    }

    // remove diffs cache when post is editing
    if (this.isEditing() && app.cache.diffs &&
      app.cache.diffs[this.props.post.id()]) {
      delete app.cache.diffs[this.props.post.id()];
    }
  });

  // prevent dropdown from closing when user
  // clicks on deleted diff
  extend(DiscussionPage.prototype, 'init', function() {
    const $body = $('body');

    $body.on('click', 'li.ParentDiff.DeletedDiff', function(e) {
      e.stopPropagation();
    });

    $body.on('click', 'li.SubDiff', function(e) {
      e.stopPropagation();
    });
  });
});
