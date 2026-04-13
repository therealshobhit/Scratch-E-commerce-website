const mongoose = require("mongoose");
// ab na hum mongodb://127.0.0.1:27017 joye chiz h uso hta rhe h aur ek bde level pe ja rhe h jisse ..
// const config =  require ("config"); not use as now i am rendering in mongo atlas

// this will be use now 
const db = process.env.MONGODB_URI;

// now we will use debug isse kya hota h ki jb hum chahe set in terminal use krke tbhi hmara output aayega
// iske aage hum fnction bhi daaldete h usme likhte h like (development : mongoose) mtlb development ke jo bhi message ho vo show kre kuch bhi likh skte h hum
const dbgr = require("debug")("development:mongoose");
// we need to set our env variables to use it we will c it how to set it 

// config.get("MONGODB_URI") ISSE hoga ki jo ye h ye khud se hi decide krta h ki konsa environment mei chl rha h hmara code lije development ya kyaaa 

mongoose.connect(`${db("MONGODB_URI")}/scratch`)// vese toh it works but some time it doesnot so we will use then and catch method we wil use that instead of console.log
.then(()=>{
    dbgr("connected")
})
.catch((err)=>{
    dbgr("not connected",err)
})
module.exports = mongoose.connection;
