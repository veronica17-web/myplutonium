const express = require('express');

// const welcome=require('../logger/logger');
// const calender=require('../util/helper');
// const string=require('../validator/formatter');
// const allMonth=require('../moduleProblem/module');
const router = express.Router();


router.get('/sol1', function (req, res) {
    let a = [1, 2, 3, 5, 6, 7], count = a[a.length - 1];
    let missing = [];
    for (let i = 1; i <= count; i++) {
        if (a.indexOf(i) == -1) {
            missing.push(i);;
        }
    }
    console.log("The Missing Number is: ", missing.toString());
    res.send('Missing No. Finded')
});


//Question 2


router.get('/sol2', function (req, res) {
    let a = [33, 34, 35, 37, 38], count = a[a.length - 1];
    let missing = [];
    for (let i = 33; i <= count; i++) {
        if (a.indexOf(i) == -1) {
            missing.push(i);;
        }
    }
    console.log("The Missing Number is: ", missing.toString());
    res.send('Missing No. Finded')
});
 




module.exports = router;