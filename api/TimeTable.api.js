const express = require('express');
const router = express.Router();
const TimeTableController = require('../controller/TimeTable.controller');

module.exports = () =>
{
    router.post("/add",TimeTableController.addTimeTable);
    router.get('/', TimeTableController.viewTimeTable);
    router.get('/:id',TimeTableController.getTimeTableByRoute)
    router.put('/edit/:id',TimeTableController.editTimeTable)
    router.delete('/delete/:id',TimeTableController.deleteTimeTable)

    return router
}
