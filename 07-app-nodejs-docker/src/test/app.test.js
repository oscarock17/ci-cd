jest.mock('../db/index');      // mock de PostgreSQL
jest.mock('../cache/index');  // mock de Redis

const request = require('supertest');
const express = require('express');
const routes = require('../routes/index'); // <-- ahora ya no carga conexiones reales

const app = express();
app.use('/api', routes);

describe('GET /api', () => {
  it('should return welcome message', async () => {
    const res = await request(app).get('/api');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Welcome to the 07-app-nodejs-docker API');
  });
});