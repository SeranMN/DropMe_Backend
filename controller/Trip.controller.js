const Trip = require('../model/Trip');


const addTrip = async(req,res) => {
    if (req.body) {
 
        let trip = new Trip(req.body)
        trip.save()
            .then((data) => { res.status(200).send(data) })
            .catch((err) => { res.status(500).send(err) });
    }

    
}

const getAllTrips = async (req, res) => {
    await Trip.find()
        .then((data) => { res.status(200).send(data) })
        .catch((err) => { res.status(500).send(err) });
}


const getTripByNIC = (req, res) => {
    Trip.find({ NIC: req.params.id })
        .then((data) => {
        res.send(data).status(200)
        })
    .catch((err)=> {res.send(err).status(err)})
}

const search = async (req,res) => {
    await Trip.find({ 'NIC': { $regex: '.*' + req.params.id + '.*' } }).then((data) => { res.status(200).send(data) })
    .catch((err) => { res.status(500).send(err) })
}

module.exports = {
    addTrip,
    getAllTrips,
    getTripByNIC,
    search
}