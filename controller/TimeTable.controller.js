const TimeTable = require('../model/TimeTable');

const addTimeTable = (req, res) => {
    if (req.body)
    {
        const timetable = new TimeTable(req.body);
        timetable.save()
            .then((data) => res.status(200).send(data))
            .catch((err)=>{res.status(200).send(data)})
    }
}
const viewTimeTable = async (req, res) => {
    await TimeTable.find()
        .then((data) => { res.status(200).send(data) })
        .catch((err) => { res.status(500).send(err) });
}

module.exports = {
    addTimeTable,
    viewTimeTable
}