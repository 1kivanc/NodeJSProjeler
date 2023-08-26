const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authModel = require("../models/authModel.js");

const register = async (req,res) => {
    try{

        const {username,email,password} = req.body
        const user = await authModel.findOne({email})

        if(user){
            return res.status(409).json({message:"This email account already exists"})
        }
        if(password.length<6){
            return res.status(400).json({message:"Your password must be at least 6 characters long."})
        }

        const hash = await bcrypt.hash(password,10)

        const newUser = await authModel.create({
            username,email,password:hash
        })

        const token = jwt.sign({id:newUser.id},process.env.SECRET_KEY,{expiresIn:"1h"})

        res.status(201).json({
            status:"OK",
            newUser,
            token
        })

    }catch(err){
        return res.status(500).json({message:err.message})
    }
}

const login = async(req,res) => {
    try{
        const {email,password} = req.body
        const user = await authModel.findOne({email})
        if(!user){
            res.status(404).json({message:"The email could not be found"})
        }
        const comparePassword = await bcrypt.compare(password,user.password)
        if(!comparePassword){
            return res.status(401).json({message:"Your password is incorrect."})
        }

        const token = jwt.sign({id:user.id},process.env.SECRET_KEY,{expiresIn:"1h"})

        res.status(200).json({
            status:"OK",
            user,
            token
        })


    }catch(err){
        return res.status(500).json({message:error.message})
    
    }
}



module.exports = {register,login}