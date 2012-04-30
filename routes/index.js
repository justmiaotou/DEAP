
/**
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
}

/**
 * 注册页
 */
exports.signup = function(req, res) {
    var opt = {};
    res.render('signup', opt);
}
exports.signup_post = function(req, res) {
}

/**
 * 一对一
 */
exports.o2o = function(req, res) {
    var opt = {user: {
        name: 'Memo',
        age: 22
    }};

    res.render('o2o', opt);
}
