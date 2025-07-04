const express = require('express');
const db = require('./db/index');
const cache = require('./cache/index');
const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

db.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });

cache.connect()
  .then(() => {
    console.log('Connected to Redis cache');
  })
  .catch(err => {
    console.error('Cache connection error:', err);
  });

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});