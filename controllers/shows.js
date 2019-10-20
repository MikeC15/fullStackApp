const express = require("express")
const router = express.Router()
const Show = require("../models/shows")

//routes

//new route
router.get("/new", (req, res)=>{
    res.render('new.ejs')
})

//post route
router.post("/", (req, res)=>{
    console.log(req.body)
})

//index route
router.get("/", (req, res)=>{
    Show.find({}, (err, foundShows)=>{
        if(err){
            console.log(err)
        }else{
            res.render("index.ejs", {
                shows: foundShows
            })
        }
    })
})

module.exports = router;