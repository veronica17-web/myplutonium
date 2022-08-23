const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publishercontroller = require('../controllers/publisherController')
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createBook", bookController.createBook  )
 router.post("/createAuthor", authorController.createAuthor  )

 router.post('/createPublisher',publishercontroller.createPublisher)
 router.get("/fetchbook",bookController.fetchbook)
 router.put("/updatebooks",bookController.updatebooks)
 router.put("/increase",bookController.increase)

// router.get("/getAuthorsData", authorController.getAuthorsData)


// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router; 