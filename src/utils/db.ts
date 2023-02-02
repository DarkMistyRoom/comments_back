'use strict';

import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('postgres', 'postgres', 'Test1234', {
  host: 'localhost',
  dialect: 'postgres',
});
