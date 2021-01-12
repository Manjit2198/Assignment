const express = require("express");
const router = new express.Router();
const multer = require("multer")
const path = require("path")
const fs = require("fs");
const Main = require("../model/main");
const mongoose = require("mongoose");
const controllers = require("../controllers/main")

//storage setup

const storage = multer.diskStorage({
    destination:"./api/controllers/uploads/",
    filename: function(req, file, cb){
        cb(null, file.fieldname + "-" + path.extname(file.originalname));
    }
});

const upload = multer({
    storage:storage,
    limits:{fileSize: 1000000},
    fileFilter:function(req, file, cb){
        checkFileType(file, cb);
    }
}).single("csv");

function checkFileType(file, cb){
  //allowed ext
  const filetypes = /csv/;

  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
   
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
      return cb(null, true);
    }else{
        cb("Error:csv file only")
    }
}

//=====ROUTES=======
router.post("/data", upload, controllers.upload_data);

router.get("/data", controllers.get_data);

module.exports = router;