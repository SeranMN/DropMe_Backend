const express = require('express');
const router = express.Router();
const BusController = require('../controller/Bus.controller');

module.exports = () =>
{
    router.post("/add", BusController.addBus);
    router.get('/', BusController.getAllBuses);
    router.get('/:id', BusController.getAllBusesByNumber);
    router.put('/balance/:id', BusController.balanceUpdate)
    router.get('/getbalance/:id',BusController.balance)
    router.get('/:id',BusController.getAllBusesByNumber)
    router.put('/edit/:id',BusController.editBus)
    router.delete('/delete/:id',BusController.deleteBus)
    router.get('/search/:id',BusController.search)
    return router
}
