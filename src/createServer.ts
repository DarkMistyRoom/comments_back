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
