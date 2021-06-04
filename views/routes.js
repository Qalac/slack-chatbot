const express = require("express")
const router = express.Router()
const {create, getResponses} = require('../contolllers/middlewares');

router.get("/users/responses/get", getResponses)

module.exports = router
