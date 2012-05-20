var helper = require('../../common.js');

var groups = {};

module.exports = {
    cachGroup : function (group) {
        if (!groups[group.id]) {
            groups[group.id] = group;
        }
    },
    getGroup: function (id) {
        return groups[id];
    }
}
