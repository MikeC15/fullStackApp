const express = require("express")
const router = express.Router()
const show = require("../models/shows")

//routes

//new route
router.get("/new", (req, res)=>{
    res.render('new.ejs')
})

module.exports = router;