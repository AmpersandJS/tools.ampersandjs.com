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
        this.searchEl = this.$('#search')[0];
        this.listenToAndRun(me, 'change:query', this.handleQueryChange);
        return this;
    },
    handleSearchKeyUp: function () {
        me.query = this.searchEl.value;
    },
    handleQueryChange: function () {
        var val = me.query;
        var pathname = location.pathname;
        this.collection.filter(val);
        if (document.activeElement !== this.searchEl) {
            this.searchEl.value = val;
        }

        if (val) {
            window.history.replaceState({}, '', pathname + '?q=' + val);
        } else {
            window.history.replaceState({}, '', pathname);
        }
    }
});
