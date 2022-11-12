const express = require('express');
const router = express.Router();
const BusController = require('../controller/Ticket.controller');

module.exports = () =>
{
    router.post("/add", BusController.addBusTrips);
    router.get('/', BusController.getAllBuses);
    router.get('/:id',BusController.getAllBusesByNumber)
    return router
}
