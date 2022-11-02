const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
    BusNo: { type: String, required: true },
    BusName: { type: String, required: true },
    Model: { type: String, required: true },
    Capacity: { type: String, required: true },
    Status: { type: String, required: true },
    Price:{type:String}
});
module.exports = mongoose.model("Bus",busSchema);