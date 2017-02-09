var app = require("express")();
var server = require("http").Server(app);
var io = require("socket.io")(server);
var bodyParser = require("body-parser");

server.listen(7001);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

app.get("/",function(req,res){
	res.send("Siap tempur!");
});

app.post("/track",function(req,res){
	console.log(req.body);
	
	io.emit("gerak",req.body);
	
	res.send("Tracking aktif aja..");
});

app.listen(port);

console.log("Node server jalan di port " + port);