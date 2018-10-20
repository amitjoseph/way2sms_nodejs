//Get the external modules
var request = require('request');
var cheerio = require('cheerio');

//All the uri that way2sms uses
const uri_login = "http://www.way2sms.com/re-login";
const uri_token="http://www.way2sms.com/send-sms";
const uri_smstoss="http://www.way2sms.com/smstoss";

var mobileNo = '';
var password = '';

var body = "mobileNo=" + mobileNo + "&password=" + password + "&CatType=";
request.post({
  headers: {'content-type' : 'application/x-www-form-urlencoded'},
  url:     uri_login,
  body:    body
}, function(error, response, body){
}
});