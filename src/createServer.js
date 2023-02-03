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
        this.app.use(cors());
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
