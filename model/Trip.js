const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
    BusNo: { type: String, required: true },
    Route: { type: String, required: true },
    NIC: { type: String, required: true },
    Cost: { type: String, required: true },
    Date: { type: String, required: true },
    
});
module.exports = mongoose.model("Trip",tripSchema);