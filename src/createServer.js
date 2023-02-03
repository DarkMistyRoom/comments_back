'use strict';
exports.__esModule = true;
exports.Server = void 0;
var session = require('express-session');
var comments_1 = require("./routes/comments");
var express = require('express');
var cors = require('cors');
var Server = /** @class */ (function () {
    function Server(port) {
        this.port = port;
        this.app = express();
        this.init();
        this.listen();
    }
    Server.prototype.init = function () {
        this.useCors();
        this.setHttpOnly();
        this.addRouter('/comments', express.json(), comments_1.commentsRouter.router);
    };
    Server.prototype.useCors = function () {
        // this.app.use(cors());
        this.app.use(function (req, res, next) {
            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
            // Request methods you wish to allow
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            // Request headers you wish to allow
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            // Set to true if you need the website to include cookies in the requests sent
            // to the API (e.g. in case you use sessions)
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            // Pass to next layer of middleware
            next();
        });
    };
    Server.prototype.addRouter = function (path, middleware, router) {
        this.app.use(path, middleware, router);
    };
    Server.prototype.setHttpOnly = function () {
        this.app.use(session({
            secret: "MY_SECRET",
            cookie: {
                httpOnly: true,
                secure: true
            }
        }));
    };
    Server.prototype.listen = function () {
        this.app.listen(this.port, function () {
            console.log('Server is running');
        });
    };
    return Server;
}());
exports.Server = Server;
