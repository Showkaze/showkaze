require('dotenv').config()
const express = require('express');
const path = require('path');
const apiController = require('./controllers/apiController.js');

const app = express()

const PORT = 3000;

app.use(express.json());

app.use('/client', express.static((path.join(__dirname, '../client'))));


app.get('/location/:state', apiController.getByState, (req, res) => {
  res.status(200).json(res.locals.concertsByState);
})


// all rountes error handler
app.use((req, res) => {
  res.status(404).send("Asset not found :-(");
})

// global error handler
app.use((err, req, res, next) => {
  const defarltErr = {
    log: 'error occurred in unknown middleware',
    status: 400,
    message: 'An error occurred'
  }
  const errorObj = Object.assign({}, defarltErr, err);
  return res.status(errorObj.status).send(errorObj.message);
})

// start server
app.listen(PORT, () => {
  console.log('Listening on port 3000...');
})