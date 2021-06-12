const express = require("express")
const router = express.Router()
const {slashResponse, getResponses, dialogueResponse} = require('../contolllers/middlewares');

router.get("/responses/get", getResponses)
router.post("/response/slash", slashResponse)
router.post("/response/event", dialogueResponse)


module.exports = router



