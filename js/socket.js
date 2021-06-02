  var socket = io();
   socket.on('results', function(results) {
   console.log(results);
   var myObj = JSON.parse(results);
   document.getElementById("temp").innerHTML = myObj.temp + " &deg;F";
   document.getElementById("humid").innerHTML = myObj.humidity + " %";
   });