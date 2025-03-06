//Creat web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var path = require('path');
var mime = require('mime');
var comments = [];
//Create server
http.createServer(function(req, res){
    //parse url
    var urlObj = url.parse(req.url, true);
    var pathname = urlObj.pathname;
    //deal with different request
    if(pathname == '/'){
        fs.readFile('./index.html', function(err, data){
            if(err){
                console.log(err);
                res.end('404 Not Found');
            }else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    }else if(pathname == '/post'){
        fs.readFile('./post.html', function(err, data){
            if(err){
                console.log(err);
                res.end('404 Not Found');
            }else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    }else if(pathname.indexOf('/public/') === 0){
        fs.readFile('.' + pathname, function(err, data){
            if(err){
                console.log(err);
                res.end('404 Not Found');
            }else{
                res.writeHead(200, {'Content-Type': mime.lookup(pathname)});
                res.end(data);
            }
        });
    }else if(pathname == '/comment'){
        var comment = urlObj.query;
        comment.dateTime = new Date();
        comments.push(comment);
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }else if(pathname == '/getComments'){
        var str = JSON.stringify(comments);
        res.end(str);
    }else{
        fs.readFile('.' + pathname, function(err, data){
            if(err){
                console.log(err);
                res.end('404 Not Found');
            }else{
                res.writeHead(200, {'Content-Type': mime.lookup(pathname)});
                res.end(data);
            }
        });
    }
}).listen(3000, function(){
    console.log('running...');
});