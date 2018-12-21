const http = require('http');

const port= process.env.port || process.env.PORT

const server = http.createServer((req, res) => {

res.statusCode = 200;

res.setHeader('Content-Type', 'text/html');

res.end('


  <html>
<body>

<h2>HTML Forms</h2>



<p>If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".</p>

</body>
</html>
  

');

});


server.listen(port,() => {

console.log(`Server running at port `+port);

});
