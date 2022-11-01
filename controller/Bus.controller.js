const User = require('../model/Bus');

const addBus = async(req,res) => {
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
    await User.findOne({BusNo:req.params.id})
        .then((data) => { res.status(200).send(data) })
        .catch((err) => { res.status(500).send(err) });
}

module.exports = {
    addBus,
    getAllBuses,
getAllBusesByNumber
}