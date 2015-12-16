/**
 * Created by yunxiaofeng on 15/12/15.
 */
var request=require("request");
var config=require('../../config/config');
module.exports=request.defaults({
  //设置连接池大小
  pool:{maxSockets: config.maxSockets},
  timeout:config.serviceTimeout,
  headers:{
    "User-Agent":"expressMVC"
  }
});
