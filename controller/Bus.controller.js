const User = require('../model/Bus');

const addBus = async (req, res) => {
    if (req.body) {
        let user = new User(req.body)
        user.save()
            .then((data) => { res.status(200).send(data) })
            .catch((err) => { res.status(500).send(err) });
    }
}

const getAllBuses = async (req, res) => {
    await User.find()
        .then((data) => { res.status(200).send(data) })
        .catch((err) => { res.status(500).send(err) });
}

const getAllBusesByNumber = async (req, res) => {
    await User.findOne({ BusNo: req.params.id })
        .then((data) => { res.status(200).send(data) })
        .catch((err) => { res.status(500).send(err) });
}

const balanceUpdate = async (req, res) => {
    await User.findOneAndUpdate({ BusNo: req.params.id }, req.body)
        .then((data) => {
            res.send(data).status(200)
        })
    .catch((err)=>res.send(err).status(500))
}
const balance = async (req, res) => {
    await User.findOne({ BusNo: req.params.id })
        .then((data) => {
            res.send(data.Balance).status(200)
        })
    .catch((err)=>res.send(err).status(500))
}

const editBus = async (req, res) => {
    console.log(req.params.id, req.body)
    if (req.body) {
        let id = req.params.id;
        await User.findByIdAndUpdate(id, req.body)
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                res.send(err);
            });
    }
}

const deleteBus = async (req, res) => {
    await User.findOneAndDelete(req.params.id)
        .then(() => res.status(200).send('Successfully Deleted'))
        .catch((err) => { res.status(500).send(err) })
}

module.exports = {
    addBus,
    getAllBuses,
    getAllBusesByNumber,
    balanceUpdate,
    balance,
    editBus,
    deleteBus
}