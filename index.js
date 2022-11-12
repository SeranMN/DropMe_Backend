const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const Bus = require('./api/Bus.api')
const Login = require('./api/Login.api')
const TimeTable = require('./api/TimeTable.api');
const User = require('./api/User.api')
const Trip = require('./api/Trip.api')
const Route = require('./api/Route.api')
const connectDB = require("./config/config");
const app = express();

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());


connectDB();

app.get("/", (req, res) => {
  res.send("Hello Node!");
});

app.use("/bus", Bus())
app.use('/login', Login());
app.use('/timetable',TimeTable())
app.use('/user', User())
app.use('/trip', Trip())
app.use('/route', Route())
app.use('/time', TimeTable())

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});