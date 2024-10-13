const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: String,
    technologies: String,
    description: String,
    link: String,
});

const projectModel = mongoose.model("project", projectSchema);

module.exports = projectModel;
