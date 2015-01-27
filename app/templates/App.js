define(function(require) {
    'use strict';

    var React = require('react');

    var App = React.createClass({
        render: function() {
            return <div className="app-component"><h1>Nice going! We'll let you take it from here.</h1></div>;
        }
    });

    return App;
});
