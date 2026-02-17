const mongoose = require("mobgoose");
// mongoose.connect("mongodb://127.0.0.1:27017/scratch")  Now we will not write this because module ka kaam hota h schema provide krna models create krna toh ab hum connection krenge config vale part mei 

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        // ab humne thoda more specified kiya h schema ko 
        trim:true,
        minlength: 3,
    },
    email: String,
    password: String,
    cart:{
        type:  Array,
        default: []
    },
    order:{
        type:  Array,
        default: []
    },
    isadmin: Boolean,
    contact: Number,
    // for now taking picture as string
    picture: String
})
// module.exports=mongoose.model("user",userSchema); now we will also not use this 

