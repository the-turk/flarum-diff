### 0.1.0-beta.7

**You'll lose all of your previous diffs again.**

- **Store** revisions as a whole instead of diffs-only.
- **Add** archive old revisions option.
  + I decided to use a linear equation **(y=mx+b)** where the **x** is post's revision count. If **x ≥ A**, first **y** revisions for the post can be stored as merged & compressed `BLOB` in a new table (which is called `post_edit_histories_archive`). Float values of **y** will be rounded to the next lowest integer value. Specify the **A**, **m** and **b** from the settings modal. It's recommended if you want to save storage volume but _not recommended if you don't want to_.
- **Add** cron job option for checking old revisions. (Thus, `fof/console` is a dependency from now on)
  + I set a weekly cron job which is working on sundays at 02:00 AM (nothing special) using `diff:archive` command**. If you want to archive old revisions, please consider enabling this option. Otherwise, it'll try to find & archive old revisions for the post as soon as `Post\Revised` event fires or wait for your `php flarum diff:archive` command.
- **Add** store main post revisions-only option.
- **Add** `the-turk/flarum-quiet-edits` support.
  + Strongly recommended if you want to save even more storage volume.
- **Add** lazy-loading to the revisions dropdown.
- **Add** rollback feature.
  + Users can rollback to certain revision if they have permission to delete revisions. There is a new event for developers called `PostWasRollbacked`
- **Add** new renderer called **Combined**
  + [Tabular view](https://i.ibb.co/df6JP6q/Combined-Tabular.png)
  + [Custom view](https://i.ibb.co/FYhSjLj/Combined-Custom.png)
- **Add** beta 12 compatibility.
- **Fix** some PHP-related warnings.
- **Fix** some CSS-related typos in renderers.
- **Fix** black borders for the dark mode.
- **Update** diff repository to 6.5.1

There are new lines & few changes for translators.

> **: Here is the only Cron entry you need to add to your (Linux) server:
> 
> `* * * * * php /<path/to/flarum>/flarum schedule:run >> /dev/null 2>&1`
> 
> This Cron will call the Laravel command scheduler every minute. Then, Laravel evaluates your scheduled tasks and runs the tasks that are due.

### 0.1.0-beta.6

- **Add** allow users to switch between renderers feature.
- **Add** synchronised scrolling option for side by side renderer's tabular view mode.

### 0.1.0-beta.5

**You'll lose all of your previous revisions.**

- **Reduce** storage volume
  + It's now almost 1.5x less than 0.1.0-beta.4 ([click here for sample comparison](https://www.diffchecker.com/hWRMcRDB))
- **Add** delete revisions feature.
  + Christmas came early. Do not forget to set permissions.
- **Add** interchangeable detail level feature.
  + You can immediately change the views of the diffs from one level to another without worrying about previous diffs which were calculated before.
- **Update** renderer views & layouts.
  + I loved the [rtfpessoa/diff2html](https://github.com/rtfpessoa/diff2html) library's layout and decided to implement it.
- **Fix** pluralization for `forum.revisionInfo` key (thanks to @rob006)
- **Update** README.md

### 0.1.0-beta.4

- **Fix** users always gets "PermissionDeniedException" when redrawing the post.
- **Fix** table headings are missing.
- **Fix** typos in translation keys (seperate -> separate).
- **Update** `php-diff` library to 6.4.4

### 0.1.0-beta.3

- **Update** directory structure.

### 0.1.0-beta.2

- **Fix** diff list is not showing up immediately after clicking the "Edited" button.
- **Fix** diff list is not showing up on `[deleted]` user's post.
- **Add** store diffs in `app.cache` on "Edited" button's `click` event.
- **Add** `fof/nightmode` support.
- **Update** dependencies.

### 0.1.0-beta.1

Initial release (as WIP).
