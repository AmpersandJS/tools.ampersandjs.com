/*global app, me, $*/
var Backbone = require('backbone');
var ReposPage = require('./pages/repos');


module.exports = Backbone.Router.extend({
    routes: {
        '': 'repos',
        'repo/:user/:project': 'repoDetail'
    },

    // ------- ROUTE HANDLERS ---------
    repos: function () {
        app.renderPage(new ReposPage({
            model: me,
            collection: app.repos
        }));
    }
});
