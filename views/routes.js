const express = require("express")
const router = express.Router()
const {postResponses, getResponses} = require('../contolllers/middlewares');

router.get("/responses/get", getResponses)
router.post("/responses/post", postResponses)
router.get("", function(req, res, next){
    res.send("next step is to integrate the bot")
})

module.exports = router
