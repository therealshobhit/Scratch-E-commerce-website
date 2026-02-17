const mongoose = require("mobgoose");

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    discount: String,
    discount:{
        type:  Number,
        default: 0
    },
    panecolor:String,
    textcolor: String,
    
    // for now taking picture as string
    picture: String
})
module.exports=mongoose.model("product",productSchema);
