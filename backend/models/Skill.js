const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
});

const skillModel = mongoose.model("skill", skillSchema);

module.exports = skillModel;