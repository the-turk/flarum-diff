# Diff for Flarum

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/the-turk/flarum-diff/blob/master/LICENSE) [![Latest Stable Version](https://img.shields.io/packagist/v/the-turk/flarum-diff.svg)](https://packagist.org/packages/the-turk/flarum-diff) [![Total Downloads](https://img.shields.io/packagist/dt/the-turk/flarum-diff.svg)](https://packagist.org/packages/the-turk/flarum-diff)

This extension adds a "post revision history" feature to your [Flarum](https://github.com/flarum) forum. I did this one for my personal Flarum project and decided to share it. It's in beta stage right now, means that you may loose your previous revisions with an update until the stable release (just as in Flarum).

Here are the screenshots:

- [Post-Stream Item](https://i.ibb.co/3FNX48x/post-Stream-Item.png)
- [Dropdown List](https://i.ibb.co/hgBMpdy/Dropdown.png)
- Inline Mode
  - [Colored custom view without line numbers](https://i.ibb.co/3vfbtYT/custom-Inline.png) (default)
  - [Colored tabular view with line numbers](https://i.ibb.co/qJVQBpm/tabular-Inline.png)
- Side by Side Mode
  - [Colored custom view without line numbers](https://i.ibb.co/Hp0rDGW/thennnn.png)
  - [Colored tabular view with line numbers](https://i.ibb.co/d6WkMm3/tabular-Side-By-Side.png)
- [Extension Settings](https://i.ibb.co/6JtMcfL/ext-Settings.png)

## Features

- Based on [jfcherng/php-diff](https://github.com/jfcherng/php-diff) repository (this one is forked from [chrisboulton/php-diff](https://github.com/chrisboulton/php-diff) since it's no longer maintained).
- Option for **line** (default), **word** and **char** level diffs.
- Two render modes including "Inline", "Side By Side".
- Option for tabular view with line numbers.
- Supports `fof/nightmode`.

Also, it won't load (and cache) anything until you click the "Edited" button so no need to worry about loading times.

## Requirements

![php](https://img.shields.io/badge/php-%5E7.1.3-blue?style=flat-square)
![ext-iconv](https://img.shields.io/badge/ext-iconv-brightgreen?style=flat-square)

You can check your php version by running `php -v` and check if `iconv` is installed by running `php --ri iconv` (which should display `iconv support => enabled`).

## Installation

Use [Bazaar](https://discuss.flarum.org/d/5151) or install manually:

```bash
composer require the-turk/flarum-diff
```

## Updating

```bash
composer update the-turk/flarum-diff
php flarum migrate
php flarum cache:clear
```

## Usage

Enable the extension, set the permissions (it's only visible to members by default) and customize the display mode if you wish.

## What's Next

- `flarum/markdown`, `flarum/bbcode` and `flarum/mentions` support (it's so challanging with external libraries).

- Rollback function? I don't know, it seems pretty useless to me since you can just copy and paste from your previous revisions. I might need to change the way of storing diffs into the database for this kind of functionality. Hit me with the suggestions on GitHub.

## Links

- [Flarum Discuss post](https://discuss.flarum.org/)
- [Source code on GitHub](https://github.com/the-turk/flarum-diff)
- [Changelog](https://github.com/the-turk/flarum-diff/blob/master/CHANGELOG.md)
- [Report an issue](https://github.com/the-turk/flarum-diff/issues)
- [Download via Packagist](https://packagist.org/packages/the-turk/flarum-diff)
