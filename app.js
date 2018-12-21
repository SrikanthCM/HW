const http = require('http');

const port= process.env.port || process.env.PORT

const server = http.createServer((req, res) => {

res.statusCode = 200;

res.setHeader('Content-Type', 'text/html');

res.end('
<html>
<body>
<form>
  First name:<br>
  <input type="text" name="firstname" value="Mickey">
  <br>
  Last name:<br>
  <input type="text" name="lastname" value="Mouse">
  <br><br>
  <input type="submit" value="Submit">
</form> 
</body>
</html> ');

});


server.listen(port,() => {

console.log(`Server running at port `+port);

});
