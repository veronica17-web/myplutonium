const express = require('express');
const router = express.Router();
const productController = require('../Controller/productController')
const UserController = require('../Controller/userController')
const middleware = require('../middlewares/commonMiddlewares')
const orderController = require("../Controller/orderController")

router.post("/createUser",middleware.headerMW, UserController.createUser)
// router.get("/getUsersData", UserController.getUsersData)
router.post('/createProduct',productController.createProduct)

router.post("/createOrder",middleware.headerMW,orderController.createOrder)
//router.get("/orderUpdate",middleware.headerMW,orderController.orderUpdate)


module.exports = router;    