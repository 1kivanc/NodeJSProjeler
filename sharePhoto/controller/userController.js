const User = require('../models/userSchema');

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
module.exports = {createUser,getAllUser};