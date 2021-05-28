var http = require('http').createServer(handler); //require http server, and create server with function handler()
var io = require('socket.io')(http) //require socket.io module and pass the http object (server)
var sensorLib = require("node-dht-sensor");
var fs = require('fs');

http.listen(8081); //listen to port 8081
function handler (req, res) { //create server
  fs.readFile(__dirname + '/index-test.html', function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'}); //display 404 on error
      return res.end("404 Not Fucking Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'}); //write HTML
    res.write(data); //write data from index.html
    return res.end();
  });
}

io.sockets.on('connection', function (socket) {
   console.log("socket connected");
   
   function foo(){
    var humid= Math.floor(Math.random() * 101);
    var temp= Math.floor(Math.random() * 101);
    var results = JSON.stringify({temp: temp, humidity: humid});
    socket.emit('results', results);
    // console.log(results);
    setTimeout(foo, 10000); // timeout for 10 sec
   }
   foo();

   socket.on("disconnect", (reason) => {
    console.log("socket disconnected: " + reason);
    //console.log(reason);
  });
});



process.on('SIGINT', function () { //on ctrl+c
  process.exit(); //exit completely
});