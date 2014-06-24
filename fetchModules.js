/* global console*/
var async = require('async');
var fs = require('fs');
var getModule = require('module-details');
var pack = require('./package.json');
var moduleList = pack.modules;


// sort module list and re-write it to package.json
moduleList.sort();
pack.modules = moduleList;
fs.writeFileSync('package.json', JSON.stringify(pack, null, 2), 'utf8');

var results = [];

async.forEach(moduleList, function (moduleName, cb) {
    console.log('fetching', moduleName);
    getModule(moduleName, function (err, data) {
        console.log('got', moduleName);
        results.push(data);
        cb();
    });
}, function () {
    var info = results.map(function (m) {
        console.log('processing', m.name);
        var latest = m.versions[m['dist-tags'].latest];
        var license = latest.license || (latest.licenses && latest.licenses[0] && latest.licenses[0].type);
        return {
            id: m.name,
            author: latest.maintainers[0].name,
            tags: latest.keywords,
            description: latest.description,
            homepage: latest.homepage || m.homepage,
            license: license || m.license || (m.licenses && m.licenses[0] && m.licenses[0].type)
        };
    });

    fs.writeFileSync('./clientapp/fixtures/repos.json', JSON.stringify(info, null, 2), 'utf8');
});
