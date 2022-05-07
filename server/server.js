require('dotenv').config()
const express = require('express')
const path = require('path');

const testController = require('./controllers/testcontrollers.js');

const app = express()

const PORT = 3000;

app.use('/client', express.static((path.join(__dirname, '../client'))));

//set up a route for get requests 
//endpoint would be the location input by user
  //if a certain location is called
app.get('/location/:state', testController.testRouteParams, (req, res) => {
  res.status(200).sendFile((path.join(__dirname, 'sal.html')));
})


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



