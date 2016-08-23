var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request');
var $ = require('jquery');
var fs = require('fs');

//mongodb dependencies
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('mongodb://admin:maples@ds147995.mlab.com:47995/homepage');

var users = require('./routes/users');

var app = express();


var compress = require('compression');

app.use(compress());
// expose node_modules to client app
app.use(express.static(__dirname + "/node_modules/", { maxage: '7d' } ));
app.use(express.static(__dirname + "/app/"));
app.use(express.static(__dirname + '/public/', { maxage: '7d' }));



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// // Make our db accessible to our router
// app.use(function(req,res,next){
//     req.db = db;
//     next();
// });

var router = express.Router();

router.get('/blogentries', function(req, res) {
    fs.readdir(__dirname + '/app/Blog/Entries', function(err, files) {
        if(err) throw err;
        console.log(files);
        var response = [];
        for(var i = 0; i < files.length; i++) {
            var data = fs.readFileSync(__dirname + '/app/Blog/Entries/' + files[i]);
            data = data.toString();
            var title = data.substring(0, data.indexOf('\n'));
            //index + 1 to remove the \n from the line
            data = data.substring(data.indexOf('\n') + 1);
            var date = data.substring(0, data.indexOf('\n'));
            data = data.substring(data.indexOf('\n') + 1);
            data = data.replace(/\n/g, "<br/>");
            response.push({
                title: title,
                date: date,
                entry: data
            });
        }
        //sort blogs by date (newest first)
        response.sort(function(a,b) {
            var first = new Date(a.date);
            var second = new Date(b.date);
            return second.getTime() - first.getTime();
        });

        res.json(response);
    });

});
var url;
router.get('/misfitsub', function(req, res) {
    url = req;
    request({
        url: req.SubscribeURL
    }, function() {
        res.json("Subscribed to " + req.SubscribeURL);
    });
});

router.get('/test1', function(req, res) {
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

app.use('/api', router);

app.all('*', function(req, res) {
  console.log("[TRACE] Server 404 request:" + req.originalUrl);
  res.status(200).sendFile(path.join(__dirname, 'public/index.html'));
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});



module.exports = app;
