'use strict';

import { Op, OrderItem, Optional } from "sequelize";
import { CommentItem } from '../models/Comment';
const fs = require('fs');
const path = require('path');

class CommentsService {
  public async getAll(parentId: any, offsetCoef: number, countPerPage: number, order: OrderItem) {
    const where = { parentId };

    const offset = (offsetCoef - 1) * countPerPage;

    if (!parentId) {
      where.parentId = { [Op.is]: null };
    }

    const comments = await CommentItem.findAll({
      where,
      order: [order],
      offset,
      limit: countPerPage,
    });

    const count = await CommentItem.count({
      where
    });

    return { comments, count };
  }

  public create(newComment: Optional<any, string>) {
    const { file } = newComment;
    
    if (file[0].length > 0) {
      newComment.file = this.handleFile(file);
    } else {
      newComment.file = '';
    }

    return CommentItem.create(newComment);
  }

  private handleFile(file) {
    const filePath = path.resolve(
      './loaded_files/', 
      Date.now() + '.' + file[1]
    );

    const fileData = file[0];
    const base64Data = fileData.replace(/^data:([A-Za-z-+/]+);base64,/, '');

    fs.writeFileSync(filePath, base64Data, { encoding: 'base64' });

    return filePath;
  }
}

export const commentsService = new CommentsService();
