// Server entry point
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = require('./src/app');
const { sequelize } = require('./src/models');

async function start() {
  try {
    await sequelize.authenticate();
    console.log(' DB conectada');

    await sequelize.sync({ alter: false });
    console.log(' Modelos sincronizados');

    app.listen(PORT, () => {
    console.log(` Servidor corriendo en puerto ${PORT}`);
    });

  } catch (error) {
    console.error('Error:', error);
  }
}

start();