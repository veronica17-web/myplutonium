
const express = require('express');
const usermodel = require('../model/usermodel');
const router = express.Router();


router.post("/createUser", async function(req,res){
    let userdata = req.body
    let saveData = await usermodel.create(userdata)
    res.send({msg :saveData})
})
module.exports = router;