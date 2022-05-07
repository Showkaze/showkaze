require('dotenv').config()
const express = require('express')
const path = require('path');


const app = express()

const PORT = 3000;

app.use('/client', express.static((path.join(__dirname, '../client'))));

app.use((req, res) => {
  res.status(404).send("Asset not found :-(");
})

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err);
})

app.listen(PORT, () => {
  console.log('Listening on port 3000...');
})