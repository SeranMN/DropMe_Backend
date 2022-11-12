const TimeTable = require('../model/TimeTable');

const addTimeTable = (req, res) => {
    if (req.body) {
        const timetable = new TimeTable(req.body);
        timetable.save()
            .then((data) => res.status(200).send(data))
            .catch((err) => { res.status(200).send(data) })
    }
}
const viewTimeTable = async (req, res) => {
    await TimeTable.find()
        .then((data) => { res.status(200).send(data) })
        .catch((err) => { res.status(500).send(err) });
}
const getTimeTableByRoute = (req, res) => {
    TimeTable.find({ routeNo: req.params.id })
        .then((data) => { res.status(200).send(data) })
        .catch((err) => { res.status(500).send(err) });
}

const editTimeTable = async (req, res) => {
    if (req.body) {
        let id = req.params.id;
        await TimeTable.findByIdAndUpdate(id, req.body)
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                res.send(err);
            });
    }
}

const deleteTimeTable = async (req, res) => {
    await TimeTable.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).send('Successfully Deleted'))
        .catch((err) => { res.status(500).send(err) })
}



module.exports = {
    addTimeTable,
    viewTimeTable,
    getTimeTableByRoute,
    editTimeTable,
    deleteTimeTable
}