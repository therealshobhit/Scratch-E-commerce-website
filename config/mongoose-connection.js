const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/scratch")// vese toh it works but some time it doesnot so we will use then and catch method 
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log("not connected",err)
})
module.exports = mongoose.connection;