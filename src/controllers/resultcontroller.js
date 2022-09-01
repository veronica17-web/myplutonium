let axios = require("axios")

 let results = async function(req,res){
    //let number =req.body.Hall Ticket No
    let data = await axios.get(`https://www.osmania.ac.in/res07/20220850.jsp/`)
    let info = data.info
    res.send(info)
 }
 module.exports.results = results