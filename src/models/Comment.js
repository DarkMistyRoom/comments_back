'use strict';
exports.__esModule = true;
exports.CommentItem = void 0;
var db_1 = require("../utils/db");
var sequelize_1 = require("sequelize");
exports.CommentItem = db_1.sequelize.define('Comment', {
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    userName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    userEmail: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    homePage: {
        type: sequelize_1.DataTypes.STRING
    },
    parentId: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: null
    },
    file: {
        type: sequelize_1.DataTypes.STRING
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW
    }
}, {
    tableName: 'comments',
    updatedAt: false
});
