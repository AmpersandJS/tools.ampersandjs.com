var BaseCollection = require('./baseCollection');
var Repo = require('./repo');
var data = require('../fixtures/repos.json');


module.exports = BaseCollection.extend({
    initialize: function () {
        this.add(data);
    },
    type: 'repos',
    model: Repo,
    filter: function (query) {
        this.each(function (repo) {
            repo.matches(query);
        });
    },
    comparator: function (model) {
        return model.id;
    }
});
