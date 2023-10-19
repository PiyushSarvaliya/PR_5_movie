const mongoose = require("mongoose")

const movieshema = new mongoose.Schema({
    title: String,
    description: String,
    releaseDate: String,
    category: String,
    actors: [{ name: String }],
    image: String,
    ratings: [
        {
            value: Number,
        },
    ],
    comments: [
        {
            text: String,
        },
    ],
    addedBy: String,
})

const movie = mongoose.model("moviedata" , movieshema)

module.exports = movie