const {Router} = require("express")
const { createmovie, movieupdate, moviecomment, movierating, moviedelete, filter } = require("../controllers/movie.controller")
// const { admincheck } = require("../middlewares/movie.middleware")
const app2 = Router()

app2.post("/create"  , createmovie)
app2.delete("/delete/:id"  , moviedelete)
app2.patch("/update/:id" , movieupdate)
app2.patch("/rating/:id" , movierating)
app2.patch("/comment/:id" , moviecomment) 
app2.get("/filter" , filter)

module.exports = app2