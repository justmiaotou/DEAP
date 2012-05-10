var helper = require('../../common.js');

module.exports = function (details) {
    var nickname = details.nickname,
        id = details.id,
        groups = details.groups,
        rss = details.rss,
        friends = details.friends,
        socket = details.socket;

    return {
        getNickname: function() {
            return nickname;
         },
        getId: function() {
            return id;
        },
        getGroups: function() {
            return groups;
        },
        getSocket: function() {
            return socket;
        },
        setNickname: function(nn) {
            nickname = nn;
         },
        setId: function(d) {
            id = d;
        },
        addGroup: function(grp) {
            var grpId = grp.getId();
            if (groups[grpId]) {
                return this.ALREADY_IN_GROUP;
            } else {
                groups[grpId] = grp;
            }
        },
        leaveGroup: function(grpOrId) {
            var grpId = helper.isString(grpOrId) ? grpOrId : grp.getId();
            if (groups[grpId]) {
                delete groups[grpId];
            }
        },
        setSocket: function(soc) {
            socket = soc;
        },
        ALREADY_IN_GROUP : 3
    }
};
