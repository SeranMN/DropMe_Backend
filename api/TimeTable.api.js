const express = require('express');
const router = express.Router();
const TimeTableController = require('../controller/TimeTable.controller');

module.exports = () =>
{
    router.post("/add",TimeTableController.addTimeTable);
    router.get('/', TimeTableController.viewTimeTable);
    router.get('/:id',TimeTableController.getTimeTableByRoute)
    return router
}
