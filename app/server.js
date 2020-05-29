'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello world.... Also Jeremy has a funny looking face, but dont tell him I said so\n');
  res.send('Also I am the best\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
