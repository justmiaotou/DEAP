
/**
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });

/**
 * 注册页
 */
exports.signup = function(req, res) {
    var opt = {};
    res.render('signup', opt);
}
exports.signup_post = function(req, res) {
}
