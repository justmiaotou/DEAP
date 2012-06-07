module.exports = {
    hasOwn: function(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
    },
    clone: function(obj) {
        var tmp = {};
        for (var a in obj) {
            if (this.hasOwn(obj, a)) {
                tmp[a] = obj[a];
            }
        }
        return tmp;
    },
    toString: function(target) {
        return Object.prototype.toString.apply(target);
    },
    isString: function(obj) {
        return this.toString(obj).toLowerCase() === '[object string]';
    },
    isFunction: function(obj) {
        return this.toString(obj).toLowerCase() === '[object function]';
    },
    isArray: function(obj) {
        return this.toString(obj).toLowerCase() === '[object array]';
    }
};
