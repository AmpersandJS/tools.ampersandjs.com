var PageView = require('./base');
var templates = require('../templates');
var RepoView = require('../views/repo');


module.exports = PageView.extend({
    template: templates.pages.repos,
    events: {
        'keyup #search': 'handleSearchKeyUp'
    },
    render: function () {
        this.renderAndBind();
        this.renderCollection(this.collection, RepoView, this.$('.repoList')[0]);
        this.listenToAndRun(me, 'change:query', this.handleQueryChange);
        return this;
    },
    handleSearchKeyUp: function (event) {
        me.query = event.target.value;
    },
    handleQueryChange: function () {
        this.collection.filter(me.query);
    }
});
