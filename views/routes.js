const express = require("express")
const router = express.Router()
const {create, getResponses} = require('../contolllers/middlewares');

router.get("/responses/get", getResponses)
router.post("/responses/post")
router.get("/", function(req, res, next){
    res.send("Deployed Successfully")
})

module.exports = router
