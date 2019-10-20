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
    if (req.body.complete === 'on') {
        // we do this to make it look like the
        // data in our model "sanitizing our data"
        req.body.complete = true;
    } else {
        req.body.complete = false;
    }
    Show.create(req.body, (err, createdShow)=>{
        if(err){
            console.log(err)
        } else{
            console.log(`I Created ${createdShow}`)
            res.redirect("/shows")
        }
    })
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