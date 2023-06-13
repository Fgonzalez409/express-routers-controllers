const express = require("express");
const router = express.Router()
const contactsControllers = require("../controller/contacts")


//get all contacts
router.get("/contacts", contactsControllers.list)

//get comment by ID
router.get("/contacts/:id", contactsControllers.show )

//create comment
router.post("/contacts", contactsControllers.create)

module.exports = router