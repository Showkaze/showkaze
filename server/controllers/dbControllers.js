const dbTools = require('../models/dbTools.js');
const pg = require('pg');

const dbControllers = {}

/*
This middleware takes an array of objects that represent different events (stored on req.body.events)
and inserts that information into the database.
*/
dbControllers.addEvents = function(req, res, next){
  const [queryString, queryArray] = dbTools.createEventAddQueryParams(req.body.events)
  dbTools.pool.query(queryString, queryArray)
    .then(() =>
      next()
    ).catch(err => next({
      log: `Error occured at dbControllers.addEvents, ERROR: ${err}`,
      message: "Error occured when adding the events to the database"
    }));
}

/*
This next middleware will return all of the events currently in the database as an array of objects.
It will convert the '_date' property into 'date' for consistency
*/
dbControllers.getAllEvents = function(req, res, next){
  dbTools.pool.query('SELECT * FROM events')
    .then(response =>
      response.rows
    ).then(rows => {
      res.locals.events = dbTools.queryReturnSanitizer(rows);
      next();
    }).catch(err => next({
      log: `Error occured at dbControllers.addEvents, ERROR: ${err}`,
      message: "Error occured when adding the events to the database"
    }));
}

module.exports = dbControllers;