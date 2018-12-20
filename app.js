const http = require('http');

var express = require('express');
var app = express();

const port=process.env.PORT || 3000

const server = http.createServer((req, res) => {

res.statusCode = 200;

res.setHeader('Content-Type', 'text/html');

res.end('<h1>Hello World</h1>');

});

app.get('/sample',function(req1,res1)
{
console.log("Hello ITG !!!");
res1.send("Hi This is Manoj")
});


app.listen(port,() => {

console.log(`Server running at port `+port);

});