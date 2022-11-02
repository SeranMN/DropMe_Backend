const mongoose = require('mongoose')

const timeTableSchema = new mongoose.Schema({
    ArrivalTime: { type: String, required: true },
    Depaturetime:{type:String,required:true},
    busNo: { type: String, required: true },
    routeNo: { type: String, required: true },
    
    
})
module.exports = mongoose.model('timeTable', timeTableSchema);

