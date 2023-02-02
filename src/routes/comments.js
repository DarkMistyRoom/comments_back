'use strict';
exports.__esModule = true;
exports.commentsRouter = exports.CommentsRouter = void 0;
var comments_1 = require("../controllers/comments");
var express = require('express');
var CommentsRouter = /** @class */ (function () {
    function CommentsRouter() {
        this.router = express.Router();
        this.init();
    }
    CommentsRouter.prototype.init = function () {
        this.addGetController(comments_1.commentsController.getAll);
        this.addPostController(comments_1.commentsController.add);
    };
    CommentsRouter.prototype.addGetController = function (controller, endpoint) {
        if (endpoint === void 0) { endpoint = '/'; }
        this.router.get(endpoint, controller);
    };
    CommentsRouter.prototype.addPostController = function (controller, endpoint) {
        if (endpoint === void 0) { endpoint = '/'; }
        this.router.post(endpoint, controller);
    };
    return CommentsRouter;
}());
exports.CommentsRouter = CommentsRouter;
exports.commentsRouter = new CommentsRouter();
