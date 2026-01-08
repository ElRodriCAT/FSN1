// Models index
const sequelize = require('../config/database');
const Task = require('./Task');

const models = {
  Task: Task(sequelize)
};

module.exports = {
  sequelize,
  ...models
};
