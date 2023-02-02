'use strict';

import { commentsService } from '../services/comments';
const stripJs = require('strip-js');

function strip(query) {
  const safeQuery = query;

  for (const key in query) {
    if (Array.isArray(safeQuery[key])) {
      safeQuery[key] = safeQuery[key].map(value => stripJs(value));

      continue;
    }

    if (key === 'parentId' && safeQuery[key] === null) {
      continue;
    }

    safeQuery[key] = stripJs(safeQuery[key]);
  }

  return safeQuery;
}

class Controller {
  public async getAll(req, res) {
    const { 
      parentId, 
      offsetCoef, 
      countPerPage, 
      order,
    } = strip(req.query);
  
    try {
      const foundComments = await commentsService
        .getAll(parentId, offsetCoef, countPerPage, order);
  
      res.send(foundComments);
    } catch (err) {
      throw new Error(err);
    }
  }

  public async add(req, res) {
    console.log(req.body);
    const newComment = strip(req.body);
    console.log(newComment);
    const { userName, userEmail, body } = newComment;
    const check = !userName || !userEmail || !body;
  
    if (check) {
      res.sendStatus(400);
  
      return;
    }
  
    try {
      const createdComment = await commentsService.create(newComment);
      
      res.statusCode = 201;
  
      res.send(createdComment);
    } catch (err) {
      throw new Error(err);
    }
  }
}

export const commentsController = new Controller();
