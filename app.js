
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    mustache = require('mustache'),
    jade = require('jade');

var app = module.exports = express.createServer();

// Configuration

// 使mustache能够成为express的渲染引擎
mustache.compile = function(str, opt) {
    return function(locals) {
        return mustache.to_html(str, opt);
    };
};

app.configure(function(){
    app.set('views', __dirname + '/app/views');
    // 使jade的layout方式生效
    app.set('view options', {layout: false});
    // 渲染jade文件时无需后缀
    app.set('view engine', 'jade');
    // 映射后缀为.mu的文件由mustache来渲染
    // app.register('.mu', require("mustache");
    app.register('.mu', mustache);
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});

// Routes
app.get('/', routes.index);
app.get('/signup', routes.signup);
app.post('/signup', routes.signup_post);
app.get('/o2o/', routes.o2o);

app.listen(3000, function(){
    console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
