/*global console*/
var clientApp = require('./clientApp');
var fs = require('fs');
var client = clientApp(null, {developmentMode: false, resourcePrefix: ''});
var files = fs.readdirSync(__dirname);

// delete the old ones
files.forEach(function (filename) {
    if (filename.indexOf('.min') !== -1) {
        fs.unlinkSync(__dirname + '/' + filename);
    }
});

client.build(__dirname, function (err) {
    if (!err) console.log('done!');
});
