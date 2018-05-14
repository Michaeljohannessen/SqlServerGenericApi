const http = require('http');
const app = require('./app');

const port = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(port, function () {
    console.log("App now running on port", port);
});
