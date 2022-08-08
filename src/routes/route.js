const express = require('express');
const abc = require('../introduction/intro')
 const welcomming = require("../logger/logger")
  const info = require("../util/helper")
  const changing = require("../validator/formatter")
const router = express.Router();

router.get('/test-me', function (req, res) {
    //console.log('My batch is', abc.name)
   welcomming.wellcome()
  info.mybatchinfo()
  changing.fromatterchanges()
  //  abc.printName()
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason