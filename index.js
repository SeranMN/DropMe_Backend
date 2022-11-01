const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const connectDB = require("./config/config");
const Bus = require('./api/Bus.api')
const Login = require('./api/Login.api')
const TimeTable = require('./api/TimeTable.api');
const User = require('./api/User.api')
const Trip = require('./api/Trip.api')
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());


connectDB()
app.use("/bus", Bus())
app.use('/login', Login());
app.use('/timetable',TimeTable())
app.use('/user', User())
app.use('/trip',Trip())
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});