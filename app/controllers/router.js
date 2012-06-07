var helper = require('../../common.js');

var pageConfig = {
    useYUI: true,
    useJQuery: false,
    useCommonCss: true,
    title: 'Memo\'s DEAP Project'
};

function mix(receiver, supplier, override) {
    var config = helper.clone(receiver);
    override = (override !== false);
    for (var i in supplier) {
        if (!config[i] || override) {
            config[i] = supplier[i];
        }
    }
    return config;
}

/**
 * GET home page.
 */
exports.index = function(req, res){
    var config = mix(pageConfig, {
        title:'Express'
    });
    res.render('index',pageConfig);
}

/**
 * 注册页
 */
exports.signup = function(req, res) {
    var config = mix(pageConfig, {
    });
    res.render('signup', config);
}
exports.signup_post = function(req, res) {
}

/**
 * 登录页
 */
exports.login = function(req, res) {
    var config = mix(pageConfig, {
    });
    res.render('login', config);
}
exports.login_post= function(req, res) {
}

/**
 * 一对一
 */
exports.o2o = function(req, res) {
    var config = mix(pageConfig, {
        user: {
            name: 'Memo',
            age: 22
        },
        title: 'Memo Love Lois'
    });

    res.render('o2o', config);
}
