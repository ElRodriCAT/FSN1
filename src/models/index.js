// Models index
const sequelize = require('../config/database');

// Importamos los modelos
const Task = require('./Task');

// Inicializamos modelos
const models = {
  Task: Task(sequelize)
};

// Exportamos todo
module.exports = {
  sequelize,
  ...models
};
