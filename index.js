const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const connectDB = require("./config/config");
const Bus = require('./api/Bus.api')
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());


connectDB()
app.use("/bus", Bus())


app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});