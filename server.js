var express = require("express");
const http = require('http');
// const bodyParser = require('body-parser');
const app = express();
const path = require('path');
global._rootDir = __dirname;

// let authSvcObj = require("./authService");

// var cors = require('cors');

// app.use(cors());

// app.use(bodyParser.json({ limit: '5mb' }));
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("./"));



// app.get('/', (req, res) => {
//     res.sendfile(path.join(__dirname, '../dist'));
// });

// Error Handling
// app.use(function (err, req, res, next) {
//     let statusCode = 200;
//     console.log(err);
//     let errorMsg = "Internal Server Error";
//     if (err.status) {
//         statusCode = err.status;
//         errorMsg = err.message;
//     }
//     res.status(statusCode);
//     res.send({ "success": false, "errorMessage": errorMsg });
// })


/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
let port = 8088;
server.listen(port, () => console.log(`API running on localhost:${port}`));