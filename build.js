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

var cache = ['CACHE MANIFEST'];

cache.push('#' + Date.now() + ' <- time when generated');

client.build(__dirname, function (err) {
    cache.push(client.result.jsMinFileName);
    cache.push(client.result.cssMinFileName);
    fs.writeFileSync('manifest.appcache', cache.join('\n'));
    if (!err) console.log('done!');
});
