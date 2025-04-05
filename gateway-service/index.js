const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/add', async (req, res) => {
  const result = await axios.post('http://calculator-service:3001/api/calc/add', req.body);
  res.json(result.data);
});

app.post('/subtract', async (req, res) => {
  const result = await axios.post('http://calculator-service:3001/api/calc/subtract', req.body);
  res.json(result.data);
});

app.get('/logs', async (req, res) => {
  const result = await axios.get('http://log-service:3002/api/logs');
  res.json(result.data);
});

app.listen(3000, () => console.log('Gateway running on port 3000'));
