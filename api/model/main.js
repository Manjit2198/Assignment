const mongoose = require("mongoose");

const mainSchema = new mongoose.Schema({
    "Mot":{
        type:String
    },
    "Catégorie grammaticale":{
        type:String,
    }
})

const Main = mongoose.model("Main", mainSchema);

module.exports = Main;