var express = require('express'),
  router = express.Router(),
  Article = require('../models/article'),
  request = require('../utils/customReq');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  var articles = [new Article(), new Article()];
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
});

router.get('/docker',function(req,res,next){
  var options = {
    //todo docker 用哪个端口
    url:'127.0.0.1:8080'
  };
  request.get(options,function(err,response,body){
    if(!err&&response.statusCode==200){
      res.send(body);
    }else{
      res.send("what fuck");
    }
  });
});
