const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    url: String,
    description: String
});

const cardModel = mongoose.model("card", cardSchema);

module.exports = cardModel;