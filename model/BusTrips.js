const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
    BusNo: { type: String, required: true },
    Date: { type: String, required: true },
    
});
module.exports = mongoose.model("BusTrip",tripSchema);