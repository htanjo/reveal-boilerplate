# reveal-boilerplate
> Boilerplate for [revela.js](http://lab.hakim.se/reveal-js/) presentation.

## Features
- **Quick installation** via [Bower](http://bower.io/)
- **Markdown** supported
- **Live preview** using [Browsersync](http://www.browsersync.io/)
- **Easy publishing** on github.io

## Quick start
[Download](https://github.com/htanjo/reveal-boilerplate/archive/master.zip), fork or clone this repository:

```sh
$ git clone https://github.com/htanjo/reveal-boilerplate.git
```

Install dependencies:

```sh
$ npm install && bower install
```

Start presentation:

```sh
$ gulp
```

Then, your presentation will start on the web browser automatically!

## Writing
Write markdown in "[slides/main.md](slides/main.md)".  
When you save the markdown, your presentation on the browser will automatically updated.

**Tip** : Insert 3 blank lines to create a new slide.

## Publish
If you host your presentation on GitHub, you can easily publish it to github.io.

```sh
$ gulp deploy
```

This will publish your presentation on `http://<user>.github.io/<repo>/` by pushing it to `gh-pages` branch.

## License
Copyright (c) 2015 Tanjo, Hiroyuki. Licensed under the MIT License.
