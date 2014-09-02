var View = require('ampersand-view');
var templates = require('../templates');


module.exports = View.extend({
    template: templates.includes.repo,
    bindings: {
        'model.active': {
            type: 'booleanClass'
        }
    },
    events: {
        'click .tags a': 'handleTagClick'
    },
    render: function () {
        this.renderWithTemplate({repo: this.model});
    },
    handleTagClick: function (e) {
        me.query = e.target.textContent;
        return false;
    }
});
