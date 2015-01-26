define(function(require) {
    var Routes = require('router/Routes');
    var Router = require('react-router');

    return Router.create({
        routes: Routes,
        location: Router.HistoryLocation
    });
});
