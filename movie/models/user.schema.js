const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    username : String,
    email : String,
    password : String
})

const user = mongoose.model("userdata" , userschema)

module.exports = user