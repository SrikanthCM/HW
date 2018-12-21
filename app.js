const http = require('http');

const port= process.env.port || process.env.PORT || 3000

var express = require('express');
var app = express();

const server = http.createServer((req, res) => {

res.statusCode = 200;

res.setHeader('Content-Type', 'text/html');

res.end(' <h1><font color="red">Hello world</font></h1> ');

});

app.get('/sample',function(req,res)
{
console.log("Hello ITG !!!");
res.send("Hi This is Manoj")
});
app.get('/itg',function(req,res)
{
console.log("Hello ITG Folks!!!");
res.send("Hello ITG Folks!!!")
});

app.listen(port,() => {

console.log(`Server running at port `+port);

});