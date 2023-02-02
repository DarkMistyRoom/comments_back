'use strict';

import { Router } from "express";
import { RequestHandler, ParamsDictionary } from "express-serve-static-core";
import { commentsController } from '../controllers/comments';
const express = require('express');

export class CommentsRouter {
  public router: Router;
  
  constructor() {
    this.router = express.Router();
    this.init();
  }

  private init() {
    this.addGetController(commentsController.getAll);
    this.addPostController(commentsController.add);
  }

  private addGetController(controller: RequestHandler, endpoint = '/') {
    this.router.get(endpoint, controller);
  }

  private addPostController(controller: RequestHandler, endpoint = '/') {
    this.router.post(endpoint, controller);
  }
}

export const commentsRouter = new CommentsRouter();
