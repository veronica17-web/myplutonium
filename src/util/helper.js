const d = new Date()
let today = d.getDate()
let month = d.getMonth() +1
const batch = "plutonium, week 3, day 5, the topic for today is Nodejs module system"
 

let myInfo = function(){
    console.log(today+"-" + month +" "+ batch)
}
module.exports.mybatchinfo =myInfo