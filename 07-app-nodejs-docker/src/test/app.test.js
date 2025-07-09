// tests/app.test.js
const request = require('supertest');
const express = require('express');
const routes = require('../routes/index');

const app = express();
app.use('/api', routes);

describe('GET /api', () => {
  it('should return welcome message', async () => {
    const res = await request(app).get('/api');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Welcome to the 07-app-nodejs-docker API');
  });
});