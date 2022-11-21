const express = require("express");
const app = express();
const port = 3000;
const allRoutes = require("./routes/allRoutes");

app.use(allRoutes);

app.listen(port, () => {
    console.log("runnning on", ":", port);
})