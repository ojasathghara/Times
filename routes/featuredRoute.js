// route file to route the api
const express = require("express");
const featuredService = require("../services/featuredService"); // calling the service that will be handled by this route

const router = express.Router();

router.get("/", featuredService);

module.exports = router;
