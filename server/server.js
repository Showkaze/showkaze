require('dotenv').config()
const express = require('express')
const path = require('path');
const controller = require('./controllers/testcontroller.js')

const app = express()

const PORT = 3000;

app.use('/client', express.static((path.join(__dirname, '../client'))));

//set up a route for get requests 
//endpoint would be the location input by user
//if a certain location is called
app.get('/location/:state', testController.testRouteParams, (req, res) => {
res.status(200).sendFile((path.join(__dirname, 'sal.html')));


app.get('/type=concert/:venue.state', controller.getByState, (req, res) => {
  res.status(200).json(res.locals.byState);
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