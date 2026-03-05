const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
fullname: {
        type: String,
        // ab humne thoda more specified kiya h schema ko 
        trim:true,
        minlength: 3,
    },
email: String,
password: String,
contact:Number,
product:{
        type:  Array,
        default: []
    },
gstno: Number,
picture: String
})
module.exports=mongoose.model("owner",ownerSchema);
