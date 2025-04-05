const express = require('express');
const morgan = require('morgan');
const winston = require('winston');

const app = express();
const logs = [];

// Setup Winston Logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) =>
      `[${timestamp}] ${level.toUpperCase()}: ${message}`
    )
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs.log' })
  ]
});

// Setup Morgan to use Winston for HTTP request logging
app.use(morgan('combined', {
  stream: {
    write: (msg) => logger.info(msg.trim())
  }
}));

app.use(express.json());

// POST /api/logs → Log calculation events
app.post('/api/logs', (req, res) => {
  const logData = {
    ...req.body,
    user: req.headers['x-user'] || req.ip, // capture user info
    timestamp: new Date().toISOString()
  };

  logs.push(logData);

  logger.info(`Log stored: ${JSON.stringify(logData)}`);
  res.status(201).json({ message: 'Log stored', data: logData });
});

// GET /api/logs → View all logs
app.get('/api/logs', (req, res) => {
  res.json(logs);
});

app.listen(3002, () => logger.info('Log service running on port 3002'));
