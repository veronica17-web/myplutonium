const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();





router.get("/sol",function(req,res){
    let arr=[1,2,3,4,6,7,8]
    let x =0
    for(i=0;i<arr.length;i++){
       x = x + arr[i] 
    }console.log(x)
     let input = arr.pop()
    totalsum = input*(input +1)/2
   // console.log(totalsum)
   let missingNo = totalsum -x
res.send({ data: missingNo  }  )
})




 
router.get('/sol2',function(req,res){
    let arr =[33, 34, 35, 37, 38]
    let n = arr.length
let totalNo =0
for(i=0;i<arr.length;i++){
    totalNo =totalNo + arr[i]
}console.log(totalNo)
 let firstNO=arr[0]
 let lastNO= arr.pop()
 
 let consecutiveNO = (n+1) * (firstNO + lastNO)/2
 console.log(consecutiveNO)
 let missing = consecutiveNO-totalNo
    res.send({ data: missing  })
})



  
 
 

module.exports = router;
// adding this comment for no reason