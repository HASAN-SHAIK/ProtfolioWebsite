const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
    description: String,
    profileViews: Number,
});

const homeModel = mongoose.model("home", homeSchema);

module.exports = homeModel;