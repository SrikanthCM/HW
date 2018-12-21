const http = require('http');

const port= process.env.port || process.env.PORT

const server = http.createServer((req, res) => {

res.statusCode = 200;

res.setHeader('Content-Type', 'text/html');

res.end('<html><body><h2>HTML Forms</h2><form action="/action_page.php">First name:<br><input type="text" name="firstname" value="Mickey"><br>Last name:<br><input type="text" name="lastname" value="Mouse"><br><br><input type="submit" value="Submit"></form> <p>If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".</p></body></html>');

});


server.listen(port,() => {

console.log(`Server running at port `+port);

});
