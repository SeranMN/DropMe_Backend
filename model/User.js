const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    NIC: { type: String, required: true },
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    ContactNo: { type: String, required: true },
    AccBalance:{type:String,required:true},
    type: { type: String, required: true }
});
module.exports = mongoose.model("User",userSchema);