const express = require("express")
const router = express.Router()
const {slashResponse, getResponses, eventResponse} = require('../contolllers/middlewares');

router.get("/responses/get", getResponses)
router.post("/response/slash", slashResponse)
router.post("/response/event", eventResponse)


module.exports = router



