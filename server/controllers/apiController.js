const fetch = require('node-fetch');
const apiController = {};
const APIKey = '122ef349d3fbf2f6d3527b76bd45451e7b042fcb0945204ae882878d7f1ce31c';
const APIId = 'MTQ3MDIyNzV8MTY1MTk0ODU1My40MDk3MTE';

apiController.getByState = (req, res, next) => {
  const { state } = req.params;
  res.locals.concertsByState = [];
  fetch(`https://api.seatgeek.com/2/events?type=concert&venue.state=${state}&client_id=${APIId}&client_secret=${APIKey}`) // defalut 10 per page, page 1
    .then(data => data.json())
    .then(data => {
      
      const events = data.events;
      console.log(events);
      for (let i = 0; i < events.length; i++) { 
        const concert = {};
        concert.imageURL = events[i].url;
        concert.artist = events[i].performers.map(el => el.name);
        concert.date = events.datetime_utc; // date format not decided yet
        concert.city = events.venue.city;
        res.locals.concertsByState.push(concert);
      }
      return next();
    })
    .catch(err => next({
      log: `Error occured at controller.getByState, ERROR: ${err}`,
      messages: "can not get concert by state"
    }))
}




module.exports = apiController;