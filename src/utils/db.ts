'use strict';

import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'postgres://DarkMistyRoom:fQw5qvGy0KIM@ep-calm-wave-927722.eu-central-1.aws.neon.tech/neondb?ssl=true'
);
