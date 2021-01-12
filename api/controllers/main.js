const express = require("express");
const router = new express.Router();
const multer = require("multer")
const path = require("path")
const CsvToJson = require("csvtojson");
const csvFilePath = `${__dirname}/uploads/csv-.csv`;
const fs = require("fs");
const Main = require("../model/main");
const mongoose = require("mongoose");

//Upload data to db
exports.upload_data = async(req, res, next)=>{
    try{
       const data = await CsvToJson().fromFile(csvFilePath)
       const jsonData = await Main.insertMany(data);
       res.status(200).send("data added succesfully")
   }catch(e){
    console.log(e);
    res.status(404).send(error);
}
};

//get the data from db
exports.get_data = async(req, res, next)=>{
    try{
    const data = await Main.find();
    res.status(200).send(data);

    }catch(e){
     res.status(500).send(error)    
}
};