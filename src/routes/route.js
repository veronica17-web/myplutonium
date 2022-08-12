
const express = require('express');
const router = express.Router();


router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]

   router.post('/players', function (req, res) {
   
for(i=0;i<players.length;i++){
    let data = players[i]
if(data.name == req.body.name)

  return res.send({msg : "please give unique name"})
}
players.push(req.body)
res.send(players)
})
  

// router.post('/players',function(req,res){
//     let newplayer = req.body
//     let newplayername = req.body.name
//     let repeatedname =false
//     for(i=0;i<players.length;i++){
//         if(players[i].name == newplayername) {
//             repeatedname =true
//            break;
//         }
//     }
//     if(repeatedname){
//      res.send({msg: "no"})
//     }else{
//         players.push(newplayer)
//         res.send(players)
//     }
    
// })


router.post('/quary',function(req,res){
let myarr =[1,2,53,3414,34511,324,114]
    let input = req.query.input
    let finalarr = myarr.filter(x=>x>input)
    res.send({data:finalarr})
})


//take input in queryparams as votingage.. and for all the people above that age, change votingstatus
// to true also return an array consisting  of only the person that cas vote
let person =[
    {
        "name" : "PK",
      "age" : 10,
      voyingStatus : false
    } ,{
        "name" : "SK",
      "age" : 20,
      voyingStatus : false
    } ,{
        "name" : "AA",
      "age" : 70,
      voyingStatus : false
    },{
        "name" : "SC",
      "age" : 5,
      voyingStatus : false
    } ,{
        "name" : "HO",
      "age" : 40,
      voyingStatus : false
    }
]
//get query param from postman of voting age 
//if voting age is above or equal to params then the votingstatus is true
//create an array eligibletoVOte push the person how are eligible
router.post('/eligibleToVote',function(req,res){
    let votingAge= req.query.votingAge
   
   for(i=0;i<person.length;i++){
    if(person[i].age>=votingAge){
     person[i].voyingStatus=true   
    }

}
let newarr=person.filter(x=>x.age>=votingAge)
  res.send(newarr)
})
module.exports = router;