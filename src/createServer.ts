'use strict';

import { Express } from 'express';
const session = require('express-session');
import { commentsRouter } from './routes/comments';
const express = require('express');
const cors = require('cors');
import { RequestHandler } from 'express-serve-static-core';

export class Server {
  private port: number;
  private app: Express;
  
  constructor(port: number) {
    this.port = port;
    this.app = express();
    this.init();
    this.listen();
  }

  private init() {
    this.useCors();
    this.setHttpOnly();
    this.addRouter('/comments', express.json(), commentsRouter.router);
  }

  private useCors() {
    this.app.use(cors());
  }

  private addRouter(path: string, middleware: RequestHandler, router) {
    this.app.use(path, middleware, router);
  }

  private setHttpOnly() {
    this.app.use(session({
      secret: "MY_SECRET",
      cookie: {
          httpOnly: true,
          secure: true
      }
    }))
  }

  private listen() {
    this.app.listen(this.port, () => {
      console.log('Server is running');
    })
  }
}

export {};
