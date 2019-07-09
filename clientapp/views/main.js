/*global app, me*/
// This app view is responsible for rendering all content that goes into
// <html>. It's initted right away and renders iteslf on DOM ready.

// This view also handles all the 'document' level events such as keyboard shortcuts.
var View = require('ampersand-view');
var _ = require('underscore');
var domify = require('domify');
var templates = require('../templates');
//var key = require('keymaster');
var tracking = require('../helpers/metrics');
var setFavicon = require('favicon-setter');


module.exports = View.extend({
    template: templates.body,
    events: {
        'click a[href]': 'handleLinkClick'
    },
    render: function () {
        // some additional stuff we want to add to the document head
        document.head.appendChild(domify(templates.head()));
        // main renderer
        this.renderWithTemplate({me: me});
        // setting a favicon for fun (note, it's dyanamic)
        setFavicon('/images/logo-ampersand.png');
        //this.createGlobalNavShortcuts();
        return this;
    }
});
