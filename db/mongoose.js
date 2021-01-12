const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/round-1-assignment",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
},()=>{
    console.log("database connected successfully");
})



