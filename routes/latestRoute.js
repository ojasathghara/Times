// route file to route the api
const express = require("express");
const latestService = require("../services/latestService"); // calling the service that will be handled by this route

const router = express.Router();

router.get("/", latestService);

module.exports = router;
