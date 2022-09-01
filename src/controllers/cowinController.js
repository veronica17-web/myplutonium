let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getByDistict = async function (req, res) {
    try {

        let district = req.query.districtid
        let date = req.query.date
        let option = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
        }
        let result = await axios(option)
        res.status(200).send({ msg: result.data })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getWeather = async function (req, res) {
    try {
        let array = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let newarr = []
        for (i = 0; i < array.length; i++) {
            let obj = { city: array[i] }
            //console.log(array[i])
            let result = await axios.get( `http://api.openweathermap.org/data/2.5/weather?q=${array[i]}&appid=46e77c1fac44f5abaf054f986fa4a2ff`)
             console.log(result.data.main.temp)
             obj.temp =result.data.main.temp
            newarr.push(obj)
          console.log(newarr)

         newarr.sort((a,b)=> a.temp-b.temp)
        }
            res.status(200).send({ msg: newarr })
    } catch (err) { 
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
   } 


   let memes = async function(req,res){
    try{

        let templateid = req.body.templateid
        let text0 = req.body.text0
        let text = req.body.text
        let option = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${templateid}&text0=${text0}&text1=${text}&username=chewie12345&password=meme@123`
        }
        let result = await axios(option)
        res.status(200).send({ msg: result.data })
    }catch (err) { 
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
   }

module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getByDistict = getByDistict
module.exports.getWeather = getWeather 
module.exports.memes=memes