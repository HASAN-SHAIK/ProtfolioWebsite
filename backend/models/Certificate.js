const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
    imgUrl: String,
    name: String,
    link: String,
    by: String
});

const certificateModel = mongoose.model("certificate", certificateSchema);

module.exports = certificateModel;