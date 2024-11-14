const express = require("express");
require('dotenv').config();
const connectDB = require('./db.js');
const homeModel = require('./models/Home.js');
const cors = require('cors');
const cardModel = require("./models/Card.js");
const skillModel = require("./models/Skill.js");
const experienceModel = require('./models/Experience.js');
const projectModel = require("./models/Project.js");
const certificateModel = require("./models/Certificate.js");

const app = express();
app.use(express.json());
app.use(cors())
connectDB()



app.get("/api/home", async (req, res) => {
    const homes = await homeModel.findOne();
    console.log(homes);
    res.send(homes);
});

app.get("/api/cards", async (req, res) => {
    const cards = await cardModel.find();
    res.send(cards);
})

app.get('/api/skills', async (req, res) => {
    var skills = await skillModel.find();
    skills = skills[0]['_doc']
    const data = Object.entries(skills).filter(skill => {
        if (skill[0] != '_id') {
            const key = skill[0];
            const value = skill[1];
            var obj = { key: value };
            return obj;
        }
    })
    res.send(data);
})

app.get('/api/projects', async (req, res) => {
    var projects = await projectModel.find();
    res.send(projects);
})

app.get('/api/experiences', async (req, res) => {
    var experiences = await experienceModel.find();
    res.send(experiences);
})
app.get('/api/certificates', async (req, res) => {
    var certificates = await certificateModel.find();
    res.send(certificates);
})

app.post('/api/profileViews', async(req, res)=>{
    const {profileViews} = await homeModel.findOne();
    const resp = await homeModel.updateOne({_id:"67026b1530690920314cab3d"},{ $set:{profileViews : profileViews+1}});
    res.json({message: profileViews});
})


const PORT = process.env.PORT || 8080;

app.listen(PORT,
    console.log(`Server started on port ${PORT}`)
);