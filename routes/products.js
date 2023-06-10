const express = require("express");
const router = express.Router()
const productsControllers = require("../controller/products")


//get all products
router.get("/products", productsControllers.list)

//get comment by ID
router.get("/products/comment/:id", productsControllers.show )

//create comment
router.post("/products", productsControllers.create)

module.exports = router