// Now hum jo bhi krenge vo INDUSTRIAL STANDARDS KE ACCORDING HOGA
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const path = require("path");

const db = require("./")

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
app.use("view enginge","ejs");

app.get("/",(req,res)=>{
    res.send("hey")
})
app.listen(3000); 
