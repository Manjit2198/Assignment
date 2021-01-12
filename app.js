require("./db/mongoose");
const express = require("express");
const app = express();
const multer = require("multer");
const mainRoute = require("./api/routes/main");



const port = 3000;
app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use(mainRoute)


app.listen(port, ()=>{
    console.log("listening to the port ", port);
})