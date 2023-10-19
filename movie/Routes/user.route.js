const {Router} = require("express")
const { signupcheck, logincheck } = require("../middlewares/user.middleware")
const { signup, login, deleteuser, userdata } = require("../controllers/user.controllers")
const app = Router()

app.get("/" , (req , res) =>{
    res.send("Welcome to the movie API")
})
app.get("/user/" , userdata)
app.post("/user/signup" , signupcheck , signup)
app.post("/user/login" , logincheck , login)
app.delete("/user/delete/:id" , deleteuser)


module.exports = app