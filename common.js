module.exports = {
    toString: function(target) {
        Object.prototype.toString.apply(target);
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
