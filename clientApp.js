var templatizer = require('templatizer');
var Moonboots = require('moonboots');
var _ = require('underscore');

module.exports = function (app, config) {
    var opts = _.extend({
        main: __dirname + '/clientapp/app.js',
        server: app,
        templateFile: __dirname + '/clientapp/index.html',
        jsFileName: 'resources',
        cssFileName: 'resources',
        developmentMode: config.isDev,
        libraries: [
            __dirname + '/clientapp/libraries/zepto.js'
        ],
        stylesheets: [
            __dirname + '/public/css/bootstrap.min.css',
            __dirname + '/public/css/bootstrap-theme.min.css',
            __dirname + '/public/css/app.css'
        ],
        beforeBuild: function () {
            var clientFolder = __dirname + '/clientapp';
            templatizer(clientFolder + '/templates', clientFolder + '/templates.js');
        }
    }, config);

    return new Moonboots(opts);
};
