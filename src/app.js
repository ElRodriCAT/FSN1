// Express app configuration
const express = require('express');

const app = express();

app.use(express.json()); // Para leer JSON en requests

app.get('/', (req, res) => {
  res.json({ message: 'API To-Do funcionando' });
});

module.exports = app;
