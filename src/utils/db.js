'use strict';
exports.__esModule = true;
exports.sequelize = void 0;
var sequelize_1 = require("sequelize");
// export const sequelize = new Sequelize('postgres', 'postgres', 'Test1234', {
//   host: 'localhost',
//   dialect: 'postgres',
// });
exports.sequelize = new sequelize_1.Sequelize('postgres://DarkMistyRoom:fQw5qvGy0KIM@ep-calm-wave-927722.eu-central-1.aws.neon.tech/neondb?ssl=true');
