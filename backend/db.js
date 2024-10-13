// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        const conn = mongoose.connect('mongodb+srv://hasanshaik:hasanshaik@protfoliocluster.v76vt.mongodb.net/protfolioDB');
        console.log("Connected to MongoDB");
    }
    catch (err) {
        console.log("Error from conenction", err);
    }
};

module.exports = connectDB;
