const mongoose = require('mongoose')

const routeSchema = new mongoose.Schema({
    routeNo: { type: String, required: true },
    Town1: { type: String, required: true },
    Town2:{type:String,required:true},
    cost:{type:String}
})

module.exports = mongoose.model('Route', routeSchema);