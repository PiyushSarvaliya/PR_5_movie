const express = require("express")
const connect = require("./config/db")
const app = require("./Routes/user.route")
const app2 = require("./Routes/movie.routes")
const route = express()
route.use(express.json())
route.use( "/movie",app2)
route.use(app)

route.listen(8090 , () =>{
    connect()
    console.log("port is start 8090")
})