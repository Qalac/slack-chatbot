const express = require("express")
const router = express.Router();
const {slashResponse, getResponses, eventResponse} = require('../contolllers/middlewares');

router.get("/responses/get", getResponses)

router.post("/response/slash", slashResponse)

router.post("/slack/events", eventResponse)

router.get("", (req, res) => {
    res.send("Event subscription is a success");
})

module.exports = router

