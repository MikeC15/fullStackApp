const mongoose = require("mongoose")

const showSchema = new mongoose.Schema({
    name: String,
    currentEpisode: String,
    complete: Boolean
})

const Show = mongoose.model("Show", showSchema)
module.exports = Show;