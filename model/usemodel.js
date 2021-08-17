const mongoose=require('mongoose');
const apimodel=mongoose.Schema({
    email:String,
    first_name:String,
    last_name:String,
    avatar:String,
    password:String,
    date:{
        type:Date,
        default:Date.now
    },
});
module.exports=mongoose.model("demouser",apimodel)