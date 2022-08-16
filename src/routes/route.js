const express = require('express');
const router = express.Router();
//const booksModel= require("../models/bookModel")
const booksController= require("../controllers/booksController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/boolsList",booksController.booksList)
router.get('/getbooks',booksController.books)

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

module.exports = router;