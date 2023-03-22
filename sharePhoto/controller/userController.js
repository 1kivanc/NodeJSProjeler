const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const createUser = async (req,res) => {
 try{

    const user = await User.create(req.body);
    res.status(201).json({
        succseded:true,
        user

    });

 }catch(err){
    res.status(500).json({
        succseded:false,
        err
    })
 }
}


const getAllUser = async (req,res) => {
    try{
        const users = await User.find({});
        res.status(200).json({
            succeded:true,
            users
        })

    }catch (err){
        res.status(500).json({
            succeded:false,
            err
        })

    }
}


const loginUser  = async (req,res) => {
    try{
        const {username , password} = req.body;

        const user = await User.findOne({username});

        let same = false;

        if(user){
            same = await bcrypt.compare(password, user.password);
        }else {
            return res.status(500).json({
                succeded:false,
                error:"there is no such user"
            });

        }
        if(same){
            res.status(200).json({
                user,
                token:createToken(user._id)
            })
        }else {
            res.status(401).json({
                succeded:false,
                error:'Passwords are not matched',
            });
        }



    }catch (err){
        res.status(500).json({
            succeded:false,
            err
        })
    }
}

const createToken = (userId) => {
    return  jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn: '1d',
    });
};

module.exports = {createUser,getAllUser,loginUser};