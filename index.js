//Get the external modules
var request = require('request');
var cheerio = require('cheerio');

//All the uri that way2sms uses
const uri_login = "http://www.way2sms.com/re-login";
const uri_token="http://www.way2sms.com/send-sms";
const uri_smstoss="http://www.way2sms.com/smstoss";

var mobileNo = 'Hello';
var password = '';

var body = "mobileNo=" + mobileNo + "&password=" + password + "&CatType=";
request.post({
  headers: {'content-type' : 'application/x-www-form-urlencoded'},
  url:     uri_login,
  body:    body
}, function(error, response, body){
    console.log('error:', error); // Print the error if one occurred
    //console.log(body);
    authData.cookies = response.headers['set-cookie'];
    console.log(authData.cookies); 
    request({
      headers: {'content-type' : 'application/x-www-form-urlencoded','Cookie': authData.cookies},
      url:     uri_token
    }, function(error, response, body){
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //console.log('body:', body); // Print the HTML for the Google homepage.
  
    var $ = cheerio.load(body);
    authData.token =$('#Token').val(); 
    console.log(authData);
    return authData;
    });
  });