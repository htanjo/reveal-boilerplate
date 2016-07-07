# reveal-boilerplate
> Boilerplate for [revela.js](http://lab.hakim.se/reveal-js/) presentation.

## Features
- **Quick installation** via [npm](https://www.npmjs.com/)
- **Markdown** support
- **Live preview** using [Browsersync](http://www.browsersync.io/)
- **Easy publishing** to github.io

## Demo
<http://htanjo.github.io/reveal-boilerplate/>

## Quick start
[Download](https://github.com/htanjo/reveal-boilerplate/archive/master.zip), fork or clone this repository:

```sh
$ git clone https://github.com/htanjo/reveal-boilerplate.git
```

Install dependencies:

```sh
$ npm install
```

Start presentation:

```sh
$ npm start
```

Then, your presentation will start on your web browser automatically!

## Write
Write Markdown text in "[slides/main.md](slides/main.md)".  
When you save the file, your presentation on the browser will instantly updated.

**Tip** : Insert 3 blank lines to create a new slide.

## Publish
If you host the presentation on GitHub, you can easily publish it to [GitHub Pages](https://pages.github.com/).

```sh
$ npm run deploy
```

This will publish your presentation on `http://<user>.github.io/<repo>/` by pushing it to `gh-pages` branch.

## License
Copyright (c) 2015-2016 Hiroyuki Tanjo.
Licensed under the MIT License.
