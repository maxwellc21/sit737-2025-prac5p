const axios = require('axios');

exports.add = async (req, res) => {
  const { a, b } = req.body;
  const result = a + b;

  await axios.post('http://log-service:3002/api/logs', { operation: 'add', a, b, result });

  res.json({ result });
};

exports.subtract = async (req, res) => {
  const { a, b } = req.body;
  const result = a - b;

  await axios.post('http://log-service:3002/api/logs', { operation: 'subtract', a, b, result });

  res.json({ result });
};
