const Ticket = require('../model/Ticket');

const addBusTrips = async(req,res) => {
    if (req.body) {
 
        let ticket = new Ticket(req.body)
        ticket.save()
            .then((data) => { res.status(200).send(data) })
            .catch((err) => { res.status(500).send(err) });
    }

    
}

const getAllBuses = async (req, res) => {
    await Ticket.find()
        .then((data) => { res.status(200).send(data) })
        .catch((err) => { res.status(500).send(err) });
}

const getAllBusesByNumber = async (req, res) => {
    await Ticket.findOne({TripID:req.params.id},{NIC:req.body.NIC})
        .then((data) => { res.status(200).send(data) })
        .catch((err) => { res.status(500).send(err) });
}

module.exports = {
    addBusTrips,
    getAllBuses,
getAllBusesByNumber
}