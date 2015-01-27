define(function(require) {
    'use strict';

    var App = require('components/App');
    var React = require('react');
    var Router = require('react-router');

    return <Router.Route name="app" path="/testing-generator/app/index.html" handler={App} />;
});
