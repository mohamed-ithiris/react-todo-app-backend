require("dotenv").config();

const mongoose = require("mongoose");

const connect_db = () => {
    try {
        mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }, () => {
            console.log("MongoDB connection success");
        })
    } catch (error) {
        console.log("MongoDB connection failure", error);
    }
}

module.exports = connect_db;