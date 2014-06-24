var Model = require('ampersand-model');


module.exports = Model.extend({
    type: 'repo',
    props: {
        // npm slug
        id: ['string', true],
        description: ['string', true],
        tags: ['array', true],
        author: ['string', true, ''],
        homepage: ['string', true, '']
    },
    derived: {
        tagLinks: {
            fn: function () {
                return this.tags.map(function (item) {
                    return '<a href="#" class="tag">' + item + '</a>';
                }).join(', ');
            }
        },
        searchString: {
            cache: true,
            fn: function () {
                return [this.id, this.description, this.author, this.homepage].concat(this.tags).join(' ').toLowerCase();
            }
        },
        npmUrl: {
            cache: true,
            fn: function () {
                return 'http://npmjs.org/package/' + this.id;
            }
        },
        npmUserUrl: {
            cache: true,
            fn: function () {
                return 'http://npmjs.org/~' + this.author.toLowerCase();
            }
        }
    },
    session: {
        active: ['boolean', true, true]
    },
    // whether or not this model matches the filter string
    matches: function (str) {
        var query = (str || '').toLowerCase();
        this.active = this.searchString.indexOf(query) !== -1;
    }
});
