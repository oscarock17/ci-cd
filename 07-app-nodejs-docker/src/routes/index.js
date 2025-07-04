const express = require('express');
const router = express.Router();
const cache = require('../cache');
const db = require('../db');

router.get('/', (req, res) => {
    res.send('Welcome to the 07-app-nodejs-docker API!');
});

router.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

router.get('/users', async (req, res) => {
  try {
    const cached = await cache.getCache('users');
    console.log(cached);
    if (cached) {
        console.log('respuesta mala: ');
        console.log(cached); // Si hay caché, lo devuelve
      return res.json({ source: 'cache', data: cached });
    }
    const  rows  = await db.getAllUsers();
    await cache.setCache('users', rows, 60);
    console.log("respuesta buena: ")
    console.log(rows) // 60 segundos
    res.json({ source: 'db', data: rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



module.exports = router;