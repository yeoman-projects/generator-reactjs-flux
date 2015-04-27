define(function(require) {
    'use strict';

    var App = require('components/App');
    var Router = require('react-router');

    return <Router.Route name="app" path="/<%= _.slugify(projectName) %>/app/index.html" handler={App} />;
});
