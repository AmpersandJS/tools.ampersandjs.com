var View = require('ampersand-view');
var templates = require('../templates');


module.exports = View.extend({
    template: templates.includes.repo,
    bindings: {
        active: ['', 'class']
    },
    events: {
        'click .tags a': 'handleTagClick'
    },
    render: function () {
        this.renderAndBind({repo: this.model});
    },
    handleTagClick: function (e) {
        me.query = $(e.target).text();
        return false;
    }
});
