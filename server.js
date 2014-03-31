/*global console, app*/
var express = require('express');
var helmet = require('helmet');
var config = require('getconfig');
var semiStatic = require('semi-static');
var clientApp = require('./clientApp');
var serverApp = express();


// -----------------
// Configure express
// -----------------
serverApp.use(express.compress());
serverApp.use(express.static(__dirname + '/public'));
// we only want to expose tests in dev
if (config.isDev) {
    serverApp.use(express.static(__dirname + '/clienttests/assets'));
    serverApp.use(express.static(__dirname + '/clienttests/spacemonkey'));
}
serverApp.use(express.bodyParser());
serverApp.use(express.cookieParser());
// in order to test this with spacemonkey we need frames
if (!config.isDev) {
    serverApp.use(helmet.xframe());
}
serverApp.use(helmet.iexss());
serverApp.use(helmet.contentTypeOptions());
serverApp.set('view engine', 'jade');


// ---------------------------------------------------
// Configure Moonboots to serve our client application
// ---------------------------------------------------
var clientApp = clientApp(serverApp, {developmentMode: config.isDev});

// Enable the functional test site in development
if (config.isDev) {
    serverApp.get('/test*', semiStatic({
        folderPath: __dirname + '/clienttests',
        root: '/test'
    }));
}

// use a cookie to send config items to client
var clientSettingsMiddleware = function (req, res, next) {
    res.cookie('config', JSON.stringify(config.client));
    next();
};

// configure our main route that will serve our moonboots app
serverApp.get('*', clientSettingsMiddleware, clientApp.html());

// listen for incoming http requests on the port as specified in our config
serverApp.listen(config.http.port);
console.log('ampersand.js – tools is running at: http://localhost:' + config.http.port + ' Yep. That\'s pretty awesome.');
