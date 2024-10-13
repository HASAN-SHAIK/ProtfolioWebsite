const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    fromYear: String,
    toYear: String,
    company: String,
    fromMonth: String,
    toMonth: String,
    description: String,
    position: String,

});

const experienceModel = mongoose.model("experience", experienceSchema);

module.exports = experienceModel;