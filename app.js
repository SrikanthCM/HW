const http = require('http');

const port=process.env.PORT || 3000

const server = http.createServer((req, res) => {

res.statusCode = 200;

res.setHeader('Content-Type', 'text/html');

res.end('<h1>Hello World</h1>');

});

var express = require('express');
var app = express();
var bodyParser =require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
var unirest = require('unirest');

app.get('/',function(req1,res1)
{
console.log("Hello ITG !!!");
res1.send("Hi This is Manoj")
});

app.get('/sample',function(req1,res1)
{
console.log("Hello ITG !!!");
res1.send("Hi This is Manoj")
});

app.get('/itg',function(req,res)
{
console.log("Hello ITG Folks!!!");
res.send("Hello ITG Folks!!!")
});
app.post('/login',function(req,res)
{
	var user = req.body.username;
	var pass = req.body.password;
	var data = {"Message":"Your user name is " +user+" Your password is "+pass};
	console.log("Your user name is " +user+" Your password is "+pass);
	res.json(data)
});

app.get('/endpoint',function(req,response)
{
		unirest.get('https://itgfunctionappdemo.azurewebsites.net/api/HelloWorld?name='+req.query.name+'&code=Mq9fzFAsgdTBsWqho2NJw9qaxFxS//mfd78pp5kECT5Gq7EQ3yHuZw==').end(function(res){
		response.send(res.body);
		});
})


app.listen(port,() => {

console.log(`Server running at port `+port);

});