const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Master Branch');
});

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.post('login', (req, res) => {
  res.send('Login Success');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});