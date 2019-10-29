var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
  // Open a file on the server and run it content:
  console.log("request was made:" +req.url);
    res.writeHead(200,{"Content-Type":"text/html"});
    var myReadStream = fs.createReadStream(_dirname + "/readMe.txt","utf8");
    myReadStream.pipe(res);
});

server.listen(3000,"127.0.0.1");
console.log("now listening to the port 3000");
