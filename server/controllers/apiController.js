const controller = {};

controller.getTypes = (req, res, next) => {
  const { state } = req.params;
  fetch(`https://api.seatgeek.com/2/events?type=concert&venue.state=${state}`)
    .then(data => data.json())
    .then(data => {
      res.locals.byState = data.event;
      return next();
    })
    .catch(err => next({
      log: `Error occured at controller.getByState, ERROR: ${err}`,
      messages: "can not get concert by state"
    }))
}




module.exports = controller;