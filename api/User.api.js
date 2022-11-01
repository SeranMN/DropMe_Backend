const express = require('express');
const router = express.Router();
const userController = require('../controller/User.controller');

module.exports = () =>
{
    router.post("/add", userController.addUser);
    router.get('/', userController.getAllUsers);
    router.get('/:id', userController.getUserById);
    router.put('/Acc/:id', userController.updateAccount);
    return router
}