const fetch = require('node-fetch');
const apiController = {};
const APIKey = '122ef349d3fbf2f6d3527b76bd45451e7b042fcb0945204ae882878d7f1ce31c';
const APIId = 'MTQ3MDIyNzV8MTY1MTk0ODU1My40MDk3MTE';

const stateCodes = require('./stateCodes');

apiController.getByState = (req, res, next) => {
  const { state } = req.params;
  res.locals.concertsByState = [];
  fetch(`https://api.seatgeek.com/2/events?type=concert&venue.state=${state}&per_page=8&client_id=${APIId}&client_secret=${APIKey}`) // defalut 10 per page, page 1
    .then(data => data.json())
    .then(data => {
      const events = data.events;
      for (let i = 0; i < events.length; i++) { 
        const concert = {};
        concert.imageURL = events[i].url;
        concert.artist = events[i].performers.map(el => el.name).join(', ');
        concert.city = events[i].venue.city;
        concert.date = events[i].datetime_utc; // date format not decided yet
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

/*
This function takes the params.state property on the request and transforms it from an
all lowercase name to a two-letter uppercase code for the state
*/
apiController.convertState = function(req, res, next){
  const newState = stateCodes[req.params.state.toLowerCase()]
  console.log("NEWSTATE: ", newState);
  return next()
}




module.exports = apiController;