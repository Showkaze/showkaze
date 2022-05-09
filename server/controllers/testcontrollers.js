const express = require('express');
const path = require('path');

const testController = {
  
  testRouteParams: function(req, res, next) {
    //ensure that the word in the request (state/city/etc) align
    //print location on screen when invoked
    console.log("HERE IS THE STATE HERE IT IS RIGHT HERE => ", req.params.state);
    next();
  }

}

module.exports = testController;