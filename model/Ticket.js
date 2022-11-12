const mongoose = require("mongoose");

const ticket = new mongoose.Schema({
    
    TripID: { type: String, required: true },
    NIC: { type: String, required: true },
   
});
module.exports = mongoose.model("Ticket",ticket);