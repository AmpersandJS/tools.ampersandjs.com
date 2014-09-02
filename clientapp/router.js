/*global app, me*/
var Router = require('ampersand-router');
var ReposPage = require('./pages/repos');


module.exports = Router.extend({
    routes: {
        '': 'repos'
    },

    // ------- ROUTE HANDLERS ---------
    repos: function () {
        app.renderPage(new ReposPage({
            model: me,
            collection: app.repos
        }));
    }
});
