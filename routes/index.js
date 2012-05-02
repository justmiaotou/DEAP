var pageConfig = {
    useYUI: true,
    title: 'Memo\'s DEAP Project'
};

function mix(receiver, supplier, override) {
    override = (override !== false);
    for (var i in supplier) {
        if (!receiver[i] || override) {
            receiver[i] = supplier[i];
        }
    }
}

/**
 * GET home page.
 */

exports.index = function(req, res){
    mix(pageConfig, {title:'Express'});
    res.render('index',pageConfig);
}

/**
 * 注册页
 */
exports.signup = function(req, res) {
    mix(pageConfig, {
    });
    res.render('signup', pageConfig);
}
exports.signup_post = function(req, res) {
}

/**
 * 一对一
 */
exports.o2o = function(req, res) {
    mix(pageConfig, {
        user: {
            name: 'Memo',
            age: 22
        },
        title: 'Memo Love Lois'
    });

    res.render('o2o', pageConfig);
}
