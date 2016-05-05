var express = require('express');
var fs = require('fs');

var app = express();

var data = fs.readFileSync('index.html');
app.get('/', function(req, res){
	res.send(data.toString());	
});

app.listen(3000, function(){
	console.log('Example app listening on port 3000');	
});