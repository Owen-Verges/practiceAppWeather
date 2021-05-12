const express = require('express');
const path  = require('path');
const {weather} = require('./fakeData');
const app = express();

app.use(express.static(path.resolve(__dirname, './client/dist')))
app.get('/', (req, res) => {
  res.end();
})
app.get('/data', (req, res) => {
  console.log(weather);
  res.send(weather)
})
app.listen(8080, () => console.log('app listening on localhost:8080'))