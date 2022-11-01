const express = require('express');
const router = express.Router();
const routeController = require('../controller/Route.controller');

module.exports = () =>
{
    router.post("/add",routeController.addRoute);
    router.get('/', routeController.getAllRoutes);
    return router
}
