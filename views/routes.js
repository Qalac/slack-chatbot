const express = require("express")
const router = express.Router()
const {slashResponse, getResponses} = require('../contolllers/middlewares');

router.get("/responses/get", getResponses)
router.post("/response/slash", slashResponse)
router.get("", function(req, res, next){
    res.send("slash response deployed")
})

module.exports = router



