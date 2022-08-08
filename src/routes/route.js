const express = require('express');
const lodash = require('lodash')
const abc = require('../introduction/intro')
 const welcomming = require("../logger/logger")
  const info = require("../util/helper")
  const changing = require("../validator/formatter")
const router = express.Router();

router.get('/test-me', function (req, res) {
  //   console.log('My batch is', abc.name)
  //  welcomming.wellcome()
  // info.mybatchinfo()
  // changing.fromatterchanges()
  // abc.printName()
let allmonths = ['jan','feb' ,'march','april','may','june','july','agust','sep','oct','nov','dec']
    let result =lodash.chunk(allmonths,3)
    console.log(result)

   let odd = [1,3,5,7,9,11,13,15,17,19]
   let allodd = lodash.tail(odd)
   console.log(allodd)


   // let allarr=[]
    let ans = lodash.union([[1,2,3,3],[3,4,5],[5,6,7],[7,8,9],[10,11,11]])
    console.log(ans)

    let pairs = lodash.fromPairs([["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]])
    console.log(pairs)
    res.send('My second ever api!')
    
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason