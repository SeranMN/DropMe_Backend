const express = require('express');
const router = express.Router();
const tripController = require('../controller/Trip.controller');

module.exports = () =>
{
    router.post("/add", tripController.addTrip);
    router.get('/', tripController.getAllTrips);
    router.get('/:id',tripController.getTripByNIC)
    return router
}
