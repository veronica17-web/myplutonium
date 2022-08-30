let jwt = require("jsonwebtoken")
let authenticate = function (req, res, next) {
  try {
    let token = req.headers["x-auth-token"];

    if (!token) return res.status(401).send({ status: false, msg: "token must be present" });

    //console.log(token);  
    let decodedToken = jwt.verify(token, "functionup-plutonium");
    if (!decodedToken)
      return res.status(403).send({ status: false, msg: "token is invalid" });
  } catch (error) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
  next()
}
const authorise = function (req, res, next) {
  // comapre the logged in user's id and the id in request
  try {
    let token = req.headers["x-auth-token"];
    let decodedToken = jwt.verify(token, "functionup-plutonium");

    let pathParamsId = req.params.userId
    let idToken = decodedToken.userId
    if (pathParamsId !== idToken) {
      return res.status(403).send({ msg: "invalid person" })
    }
    if (!decodedToken)
      return res.status(403).send({ status: false, msg: "token is invalid" });
  } catch (error) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
  next()
}

module.exports.authenticate = authenticate
module.exports.authorise = authorise