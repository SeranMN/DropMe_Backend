const mongoose = require('mongoose')

const timeTableSchema = new mongoose.Schema({
    time: { type: String, required: true },
    busNo: { type: String, required: true },
    routeNo: { type: String, required: true },
    startTown: { type: String, required: true },
    stopTown:{type:String,required:true}
    
})
module.exports = mongoose.model('timeTable', timeTableSchema);

