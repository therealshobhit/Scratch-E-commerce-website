// Now hum jo bhi krenge vo INDUSTRIAL STANDARDS KE ACCORDING HOGA
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const path = require("path");

const db = require("./config/mongoose-connection")

// jo humne routes bnae h aur uhdr export kiya h unko yha likh rha hu 
const ownersroutes =  require("./routes/ownersroutes");
const productsroutes =  require("./routes/productsroutes");
const usersroutes =  require("./routes/usersroutes");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");

// now what we are doing jo bhi routes h unke accordings end kr rhe h 
app.use("/owners",ownersroutes);
app.use("/products",productsroutes);
app.use("/users",usersroutes);

app.get("/",(req,res)=>{
    res.send("hey")
})
app.listen(3000); 
