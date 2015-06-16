define(function(require) {
    'use strict';

    var React = require('react');
    var Router = require('react-router');
    var Route = Router.Route, RouteHandler = Router.RouteHandler;

    var App = React.createClass({
        mixins: [Router.State],

        render: function() {
            var key = 'route';
            var params = this.props.params;
            if (params) {
                // Generate a unique key to set on the RouteHandler. Otherwise when switching between two of the same page
                // they aren't remounted which causes new data to not be loaded.
                // SEE: https://github.com/rackt/react-router/blob/master/docs/guides/overview.md#important-note-about-dynamic-segments
                for (var parameter in params) {
                    key += '-' + parameter + ':' + params[parameter];
                }
            }
            return (
                <div className="app-component">
                    <h1>Nice going! We'll let you take it from here.</h1>
                    <RouteHandler key={key} {...this.props} />
                </div>
            );
        }
    });

    var routes = <Route name="app" path="/" handler={App} />;

    Router.run(routes, function(Handler, state) {
        React.render(<Handler params={state.params} />, document.body);
    });
});
