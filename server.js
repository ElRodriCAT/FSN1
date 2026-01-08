// Server entry point
require('dotenv').config();

const { sequelize } = require('./src/models');

async function start() {
  try {
    await sequelize.authenticate();
    console.log('📦 DB conectada');

    await sequelize.sync({ alter: false });
    console.log('📄 Modelos sincronizados');

  } catch (error) {
    console.error('❌ Error:', error);
  }
}

start();