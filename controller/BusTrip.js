const BusTrip = require('../model/BusTrips');

const addBusTrips = async(req,res) => {
    if (req.body) {
 
        let busTrip = new BusTrip(req.body)
        busTrip.save()
            .then((data) => { res.status(200).send(data) })
            .catch((err) => { res.status(500).send(err) });
    }

    
}

const getAllBuses = async (req, res) => {
    await BusTrip.find()
        .then((data) => { res.status(200).send(data) })
        .catch((err) => { res.status(500).send(err) });
}

const getAllBusesByNumber = async (req, res) => {
    await BusTrip.findOne({BusNo:req.params.id})
        .then((data) => { res.status(200).send(data) })
        .catch((err) => { res.status(500).send(err) });
}

module.exports = {
    addBusTrips,
    getAllBuses,
getAllBusesByNumber
}