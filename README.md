# generator-reactjs-flux

> [Yeoman](http://yeoman.io) generator for Facebook's React framework and Flux application architecture.

## What's inside?

* [React](http://facebook.github.io/react/) JavaScript library for building user interfaces
* [Flux](https://facebook.github.io/flux/) Application architecture for building user interfaces
* [Compass](http://compass-style.org/) Css authoring framework
* [Sass](http://sass-lang.com/) CSS with superpowers
* [Require](http://requirejs.org/) JavaScript file and module loader optimized for in-browser use
* [Grunt](http://gruntjs.com/) JavaScript task runner for performing repetitive tasks like minification, compilation, unit testing, linting, etc
* [Jasmine](http://jasmine.github.io/2.2/introduction.html) Behavior-driven development framework for testing JavaScript code
* [Istanbul](https://github.com/gotwarlost/istanbul) JavaScript statement, line, function, and branch code coverage when running unit tests
* [JSHint](http://jshint.com/) Detect errors and potential problems in JavaScript code and enforce your team's coding conventions
* [JSCS](http://jscs.info/) JavaScript Code Style checker
* [Watch](https://github.com/gruntjs/grunt-contrib-watch) Automated [JSX](http://facebook.github.io/react/docs/jsx-in-depth.html)
and [Sass](http://sass-lang.com/) compilation when watched file patterns are added, changed, or deleted

## Getting Started

### Install Yeoman

```
$ npm install -g yo grunt-cli react-tools
```

On Windows, we suggest you use an improved command line tool such as [cmder](http://bliker.github.io/cmder/)
or PowerShell to improve the experience.

### Install and use Generators

To install generator-reactjs-flux, clone this repo, and run the following command from the root directory:

```
$ npm link
```

Finally, initiate the generator:

```
$ cd ~/path/to/project/root
$ yo reactjs-flux
```

NPM Troubles? npm ERR! Are you seeing something like: `Error: EACCES, mkdir '/Users/user/.npm/dargs/2.1.0'` ?
Try the following commands and try the previous step again:

```
$ cd ~/Users/user
$ sudo chown -R $(whoami) .npm
```

### Install Compass & Sass

```
$ gem install compass
```

If you find your css build results are empty, update your sass gem.

### Grunt Tasks

The default grunt task will compile jsx and scss files as well as start a watcher for them.

```
$ grunt
```

Same as the default grunt task, however it will reinstall dependencies.

```
$ grunt init
```

Run Jasmine unit tests, JSHint, and JSCS

```
$ grunt test
```

Same as grunt test, however, this task will run code coverage and launch the code coverage in your browser.

```
$ grunt test:cov
```

## License

MIT

## Special Thanks To:

Randy Lien for the work done on the [react-gulp-browserify generator](https://github.com/randylien/generator-react-gulp-browserify).

The [Yeoman](http://yeoman.io) team.
