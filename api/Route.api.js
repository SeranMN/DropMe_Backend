const express = require('express');
const router = express.Router();
const routeController = require('../controller/Route.controller');

module.exports = () =>
{
    router.post("/add",routeController.addRoute);
    router.get('/', routeController.getAllRoutes);
    router.put('/edit/:id',routeController.editRoute)
    router.delete('/delete/:id',routeController.deleteRoute)
    router.get('/search/:id',routeController.search)
    return router
}
