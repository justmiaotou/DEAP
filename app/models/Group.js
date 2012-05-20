var helper = require('../../common.js');

module.exports = function (details) {
    var name = details.name,
        id = details.id,
        members = details.members || {},
        rss = details.rss;

    // 被删除的成员引用将保存在这个对象中
    members.deleted = {};

    return {
        getName: function() {
            return name;
         },
        getId: function() {
            return id;
        },
        getMember: function(id) {
            return members[id];
        }
        getMemebers: function() {
            return members;
        },
        setName: function(nn) {
            name = nn;
         },
        setId: function(d) {
            id = d;
        },
        /**
         * 从数据传送以及效率上考虑，决定传入参数为id而不是整个user
         */
        hasMember: function(id) {
            return members[user.id] ? true : false;
        },
        delMember: function(user) {
            members.deleted[user.id] = user;
            delete members[user.id];
        },
        addMembers: function(users) {
            var uId = null
                exists = [];
            if (helper.isArray(users)) {
                for (var i = 0, l = users.length; i < l; ++i) {
                    uId = user[i]['id'];
                    hasMember(uId) ? exists.push(uId) : (members[uId] = users[i]);
                }
            } else {
                hasMember(users.id) ? exists.push(users.id) : (members[users.id] = users);
            }

            return {
                members: members,
                exists: exists
            };
        }
    }
};
