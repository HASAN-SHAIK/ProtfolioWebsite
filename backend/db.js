// import mongoose from 'mongoose';
const mongoose = require('mongoose');
require('dotenv').config()

const connectDB = async () => {
    const {username, password, cluster, dbname} = process.env;
    try {
        console.log(username)
        mongoose.connect(`mongodb+srv://${username}shaik:${password}@${cluster}.v76vt.mongodb.net/${dbname}`);
        console.log("Connected to MongoDB");
    }
    catch (err) {
        console.log("Error from conenction", err);
    }
};

module.exports = connectDB;
