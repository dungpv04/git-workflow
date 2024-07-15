const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Master Branch');
});

app.get('/hello', (req, res) => {
  res.send('Hello World! Feature Branch');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});