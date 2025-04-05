const express = require('express');
const app = express();
const calculatorRoutes = require('./routes/calculatorRoutes');

app.use(express.json());
app.use('/api/calc', calculatorRoutes);

app.listen(3001, () => console.log('Calculator service running on port 3001'));
