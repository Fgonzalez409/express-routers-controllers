const express = require("express");
const router = express.Router()
const vehiclesControllers = require("../controller/vehicles")


//get all vehicles
router.get("/vehicles", vehiclesControllers.list)

//get comment by ID
router.get("/vehicles/:id", vehiclesControllers.show )

//create comment
router.post("/vehicles", vehiclesControllers.create)

module.exports = router