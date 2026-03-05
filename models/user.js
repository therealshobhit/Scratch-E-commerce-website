const mongoose = require("mongoose");
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
    cart: [{
        // yahan ref: "product" dena sabse zaroori tha
        //  taaki .populate("cart") asali product data (image, price) la sake
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    }],
    order: {
        type: Array,
        // we need to ref here ki jo id aarhi h vo kiski id hogi 
        ref: "product"
    },
    isadmin: Boolean,
    contact: Number,
    // for now taking picture as string
    picture: String
})

//  OVERWRITE FIX: 
 // Industrial standard check taaki server restart par crash na ho
// module.exports=mongoose.model("user",userSchema); now we will also not use this 
 // Schema ko Model mein wrap karna zaroori hai tabhi find() kaam karega
module.exports = mongoose.models.user || mongoose.model("user", userSchema);