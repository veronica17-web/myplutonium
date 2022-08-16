const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksList",BookController.getbooks)

router.post("/getBooksInYear",BookController.yrbooks)

router.post("/getParticularBooks",BookController.getParticularBooks)

router.get("/getXINRBooks",BookController.getDateOnInr) 

router.get("/getRandomBook",BookController.getRandomBook)
module.exports = router;