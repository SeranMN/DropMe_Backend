const express = require('express');
const router = express.Router();
const BusController = require('../controller/Bus.controller');

module.exports = () =>
{
    router.post("/add", BusController.addBus);
    router.get('/', BusController.getAllBuses);
    router.get('/:id',BusController.getAllBusesByNumber)
    router.put('/edit/:id',BusController.editBus)
    router.delete('/delete/:id',BusController.deleteBus)
    return router
}
