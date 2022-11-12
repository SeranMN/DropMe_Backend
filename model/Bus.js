const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
    BusNo: { type: String },
    routeNo: {type:String},
    BusName: { type: String },
    Model: { type: String },
    Capacity: { type: String },
    Status: { type: String },
    Price: { type: String },
    Route: { type: String },
    Balance:{type: String}
});
module.exports = mongoose.model("Bus",busSchema);