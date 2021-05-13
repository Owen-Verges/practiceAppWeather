const path = require('path');
const {weather} = require('./fakeData');
const express = require('express')

const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, '/client/dist')))
app.get('/', (req, res) => res.end())
app.get('/data', (req, res) => res.send(weather))
app.listen(8080, () => console.log('server running at localhost:8080'))