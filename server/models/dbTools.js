const pg = require('pg');
const fs = require('fs');
const path = require('path');
const { Console } = require('console');
// db url
const POSTGRES_URI = 'postgres://gvwrgjhp:MqxNWDDg7xIMWzZB1tTfxpqGhpX-C0rH@heffalump.db.elephantsql.com/gvwrgjhp'

// Open a pool
const pool = new pg.Pool({
  connectionString: POSTGRES_URI
});

const resetQuery = fs.readFileSync(path.join(__dirname, 'showkazeDB.sql'), 'utf8');
const addQuery = fs.readFileSync(path.join(__dirname, 'sample.sql'), 'utf8');

const dbTools = {}

dbTools.pool = pool;
dbTools.reset = () => {
  console.log('Resetting the db with this query: \n', resetQuery)
  pool.query(resetQuery);
}
dbTools.add = () => pool.query(addQuery).catch(err => console.log(err));
dbTools.view = () => pool.query('SELECT * FROM tasks').then(response => console.log(response.rows));

/*
This function creates the parameterized query string and array of elements for use with pg.pool.query()
The string and array are returned in an array at index 0 and 1 respectively. 
*/
dbTools.createEventAddQueryParams = function(eventArray){
  let queryString = 'INSERT INTO events (id, imageURL, artist, _date, city) VALUES ';
  let queryArray = [];
  for(const e of eventArray){
    queryArray.push(e.id, e.imageURL, e.artist, e.date, e.city);
  }
  for(let i = 0; i < eventArray.length; i++){
    queryString = queryString.concat(`($${5 * i + 1}, $${5 * i + 2}, $${5 * i + 3}, $${5 * i + 4}, $${5 * i + 5})`);
    if(i < eventArray.length - 1) queryString = queryString.concat(',');
  }
  console.log('QUERY STRING: ', queryString);
  console.log('QUERY ARRAY: ', queryArray);
  return [queryString, queryArray];
}

/*
This function simply changes the property name from '_date' to 'date' on all of the objects in the array passed to it.
It updates the array in place and returns the same array.
These objects are the results of a query that returns a record from the events table in the database.
*/
dbTools.queryReturnSanitizer = function(returnedQueryArray){
  for(const record of returnedQueryArray){
    record.date = record._date;
    delete record._date;
  }
  return returnedQueryArray;
}


module.exports = dbTools;