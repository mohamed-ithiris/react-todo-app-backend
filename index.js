const express = require("express");
const app = express();
const port = 3001;
const allRoutes = require("./routes/allRoutes");

// get data from client
app.use(express.json());

// Mongo db connection using mongoose framework
const connect_db=require("./config/db_config");
connect_db();

app.use(allRoutes);

app.listen(port, () => {
    console.log("runnning on", ":", port);
})