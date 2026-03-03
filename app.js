// Now hum jo bhi krenge vo INDUSTRIAL STANDARDS KE ACCORDING HOGA
require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const path = require("path");
const db = require("./config/mongoose-connection")
// requiring express-session for flash
const session = require('express-session')
// is libray ko require krna jruri hota h 
const flash = require("connect-flash");

// jo humne routes bnae h aur uhdr export kiya h unko yha likh rha hu 
const ownersroutes =  require("./routes/ownersroutes");
const productsroutes =  require("./routes/productsroutes");
const usersroutes =  require("./routes/usersroutes");
const indexroutes = require("./routes/indexroutes")


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
// session  for flash 
app.use(session(
    {  resave: false,
       saveUninitialized: true,
       secret: process.env.EXPRESS_SESSION_SECRET_KEY,
    }
))
// in this we will use flash also  remeber for flash we need to create a session 
app.use(flash());


// now what we are doing jo bhi routes h unke accordings end kr rhe h 
app.use('/' , indexroutes);
app.use('/owner' , ownersroutes );
app.use('/product' , productsroutes );
app.use('/user' , usersroutes);

app.listen(3000); 
