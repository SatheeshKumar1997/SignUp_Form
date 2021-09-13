const express = require("express");
const router = express.Router();

const authServices = require("../Services/register.Service");

router.post("/signup/register",async (req,res) => {
    console.log(req.body);
    await authServices.register(req.body,res);
});

module.exports = router;