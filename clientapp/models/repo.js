var HumanModel = require('human-model');


module.exports = HumanModel.define({
    type: 'repo',
    props: {
        // npm slug
        id: ['string', true],
        repoType: ['string', true, 'client'],
        description: ['string', true],
        tags: ['array', true],
        author: ['string', true, 'HenrikJoreteg'],
        github: 'string',
        githubUser: 'string'
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
                return [this.id, this.description, this.author, this.github].concat(this.tags).join(' ').toLowerCase();
            }
        },
        npmUrl: {
            cache: true,
            fn: function () {
                return 'http://npmjs.org/package/' + this.id;
            }
        },
        githubUrl: {
            cache: true,
            fn: function () {
                return this.githubUserUrl + '/' + (this.github || this.id);
            }
        },
        githubUserUrl: {
            cache: true,
            fn: function () {
                return 'https://github.com/' + (this.githubUser || this.author);
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
