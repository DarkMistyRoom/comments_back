'use strict';

import { sequelize } from '../utils/db';
import { DataTypes } from 'sequelize';

export const CommentItem = sequelize.define('Comment', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userEmail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  homePage: {
    type: DataTypes.STRING,
  },
  parentId: {
    type: DataTypes.UUID,
    defaultValue: null,
  },
  file: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'comments',
  updatedAt: false,
});
