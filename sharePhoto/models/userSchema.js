const mongoose = require('mongoose');
const bcrypt =require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true
    },
    
},{
    timestamps:true
}
);

userSchema.pre('save',function(next) {
    const user = this;
    console.log('user password 1', user.password);
    bcrypt.hash(user.password,10,(err,hash) => {
        user.password = hash;
        console.log('user password 2',user.password);
        next();
    })
})

const User = mongoose.model('User',userSchema);
module.exports = User;