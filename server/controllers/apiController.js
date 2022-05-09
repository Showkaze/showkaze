const fetch = require('node-fetch');
const apiController = {};
const APIKey = '122ef349d3fbf2f6d3527b76bd45451e7b042fcb0945204ae882878d7f1ce31c';
const APIId = 'MTQ3MDIyNzV8MTY1MTk0ODU1My40MDk3MTE';

let currentState = 'CA';
let currentPage = 1;

apiController.getByState = (req, res, next) => {
  const { state } = req.params;
  if (state !== currentState) {
    currentState = state;
    currentPage = 1;
  } else {
    currentPage++;
  }
  res.locals.concertsByState = [];
  fetch(`https://api.seatgeek.com/2/events?type=concert&venue.state=${state}&per_page=8&page=${currentPage}&client_id=${APIId}&client_secret=${APIKey}`) // defalut 8 per page, page 1
    .then(data => data.json())
    .then(data => {
      const events = data.events;
      for (let i = 0; i < events.length; i++) { 
        const concert = {};
        concert.imageURL = events[i].url;
        concert.artist = events[i].performers.map(el => el.name).join(', ');
        concert.city = events[i].venue.city;
        concert.date = events[i].datetime_local; // date format not decided yet
        // // var utcDate = events[i].datetime_utc; // date format not decided yet
        // var localDate = new Date(events[i].datetime_utc)
        res.locals.concertsByState.push(concert);
      }
      console.log(res.locals.concertsByState);
      return next();
    })
    .catch(err => next({
      log: `Error occured at controller.getByState, ERROR: ${err}`,
      messages: "can not get concert by state"
    }))
}

apiController.getNext = (req, res, next) => {
  const { state } = req.params;
  if (state !== currentState) {
    currentState = state;
    currentPage = 1;
  } else {
    currentPage++;
  }
  if (err) {
    return next({
      log: `Error occured at controller.getNext, ERROR: ${err}`,
      messages: "can not get next page"
    })
  }
  return next();
}

apiController.getPrevious = (req, res, next) => {
  const { state } = req.params;
  if (state !== currentState) {
    currentState = state;
    currentPage = 1;
  } else {
    if (currentPage !== 1) currentPage--;
    else (console.log('reached the first page'));
  }
  if (err) {
    return next({
      log: `Error occured at controller.getPrevious, ERROR: ${err}`,
      messages: "can not get previous page"
    })
  }
  return next();
}





module.exports = apiController;