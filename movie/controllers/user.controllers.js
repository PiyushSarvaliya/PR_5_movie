const user = require("../models/user.schema")

const signup = async(req , res) =>{
    let {username , email , password} = req.body

    let data = await user.create(req.body)
    res.status(201).send(data)
}

const login = async(req , res) =>{
    let {username , password} = req.body

    let data = await user.findOne({username : username})
    if(!data || password != data.password){
        res.status(401).json({error:"Invalid username or password"})
    }
    else{
        res.send({message : "Logged in successfully"})
    }
}

const deleteuser = async(req,res) => {
    let {id} = req.params

    let data = await user.findByIdAndDelete(id)
    res.json({message : "User deleted successfully"})
}

const userdata = async(req , res) =>{
    let data = await user.find()
    res.send(data)
}

module.exports = {signup , login , deleteuser , userdata}