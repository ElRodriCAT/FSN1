// Express app configuration
const express = require('express');
const app = express();
const taskRoutes = require('./routes/taskRoutes');

app.use(express.json()); // Para leer JSON en requests

app.get('/', (req, res) => {
  res.json({ message: 'API To-Do funcionando' });
});


app.use('/api/tasks', taskRoutes);

module.exports = app;
