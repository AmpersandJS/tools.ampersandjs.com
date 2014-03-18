// our base collection
var Collection = require('ampersand-collection');
var underscoreMixins = require('ampersand-collection-underscore-mixin');


module.exports = Collection.extend(underscoreMixins, {
    // ###next
    // returns next item when given an item in the collection
    next: function (item, filter, start) {
        var i = this.indexOf(item),
            newItem;

        if (i === -1) {
            i = 0;
        } else if (i + 1 >= this.length) {
            i = 0;
        } else {
            i = i + 1;
        }
        newItem = this.at(i);
        if (filter && newItem !== start) {
            if (!filter(newItem)) {
                return this.next(newItem, filter, start || item);
            }
        }
        return newItem;
    },

    // ###prev
    // returns previous item when given an item in the collection
    prev: function (item, filter, start) {
        var i = this.indexOf(item),
            newItem;
        if (i === -1) {
            i = 0;
        } else if (i === 0) {
            i = this.length - 1;
        } else {
            i = i - 1;
        }
        newItem = this.at(i);
        if (filter && newItem !== start) {
            if (!filter(newItem)) {
                return this.prev(newItem, filter, start || item);
            }
        }
        return this.at(i);
    }
});
