const mongoose=require('mongoose');
const userShema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
},{
    // for traking when this will be update and create
    timeseries:true
})

const User=mongoose.model('User',userShema);
module.exports=User;