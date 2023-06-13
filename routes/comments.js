const express = require("express");
const router = express.Router()
const commentsControllers = require("../controller/comments")


//get all comments
router.get("/comments", commentsControllers.list)

//get comment by ID
router.get("/comments/:id", commentsControllers.show )

//create comment
router.post("/comments", commentsControllers.create)

module.exports = router