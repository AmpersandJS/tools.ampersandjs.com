var HumanView = require('human-view');
var templates = require('../templates');


module.exports = HumanView.extend({
    template: templates.includes.repo,
    classBindings: {
        active: ''
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
