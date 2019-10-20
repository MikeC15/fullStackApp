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
    if (req.body.complete === 'on') {
        req.body.complete = true;
    } else {
        req.body.complete = false;
    }
    Show.create(req.body, (err, createdShow)=>{
        if(err){
            res.send(err)
        } else{
            console.log(`I Created ${createdShow}`)
            res.redirect("/shows")
        }
    })
})

//edit route
router.get("/:id/edit", (req, res)=>{
    Show.findById(req.params.id, (err, foundShow)=>{
        if(err){
            res.send(err)
        }else{
            res.render("edit.ejs", {
                show: foundShow
            })
        }
    })
})

//update route
router.put("/:id", (req,res)=>{
    if (req.body.complete === 'on') {
        req.body.complete = true;
    } else {
        req.body.complete = false;
    }
    Show.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedShow)=>{
        if(err){
            res.send(err)
        }else{
            res.redirect("/shows")
        }
    })
})

//show route
router.get("/:id", (req, res)=>{
    Show.findById(req.params.id, (err, foundShow)=>{
        if(err){
            res.send(err)
        }else{
            res.render("show.ejs", {
                show: foundShow
            })
        }
    })
})

//index route
router.get("/", (req, res)=>{
    Show.find({}, (err, foundShows)=>{
        if(err){
            res.send(err)
        }else{
            res.render("index.ejs", {
                shows: foundShows
            })
        }
    })
})

//destroy route
router.delete("/:id", (req, res)=>{
    Show.findByIdAndDelete(req.params.id, (err)=>{
        if(err){
            res.send(err)
        } else{
            res.redirect("/shows")
        }
    })
})

module.exports = router;