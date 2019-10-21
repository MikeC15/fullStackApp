//Netflix Tracker server main connection page

const express = require("express");
const app = express();
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const showsController = require("./controllers/shows");
require("./db/db")

app.use(express.static('./public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use("/shows", showsController)

app.listen(3000, ()=>{
    console.log("We are listening.")
})