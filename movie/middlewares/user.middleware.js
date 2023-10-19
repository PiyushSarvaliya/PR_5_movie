const signupcheck = (req , res , next)=>{
    let {username , email , password} = req.body

    if(username && email && password){
        next()
    }
    else{
        res.status(400).json({Error : "all fields are required"})
    }
}

const logincheck = (req , res, next) =>{
    let {username , password} = req.body

    if(username && password){
        next()
    }
    else{
        res.status(400).json({Error : "all fields are required"})
    }
}


module.exports = {signupcheck , logincheck }