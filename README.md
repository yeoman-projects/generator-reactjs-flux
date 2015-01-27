# generator-dataminr-react-flux

> [Yeoman](http://yeoman.io) generator for Facebook's React framework and Flux application architecture.

## What's inside?

* React
* Flux
* Sass
* Require
* Grunt
* Jasmine
* Istanbul
* JSHint
* JSCS
* Watch

## Getting Started

### Install Yeoman

```
$ npm install -g yo
```

On Windows, we suggest you use an improved command line tool such as [cmder](http://bliker.github.io/cmder/)
or PowerShell to improve the experience.

### Install and use Generators

To install generator-dataminr-react-flux, clone this repo, and run the following command from the root directory:

```
$ npm link
```

Finally, initiate the generator:

```
$ cd ~/path/to/project/root
$ yo dataminr-react-flux
```

NPM Troubles? npm ERR! Are you seeing something like: `Error: EACCES, mkdir '/Users/user/.npm/dargs/2.1.0'` ?
Try the following commands and try the previous step again:

```
$ cd ~/Users/user
$ sudo chown -R $(whoami) .npm
```

### Install Sass

```
$ gem install sass
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
