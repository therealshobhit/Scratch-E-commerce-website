// express.Router() ek mini app hota hai Express ke andar.Iska use hum routes ko alag files me divide karne ke liye karte hain.
const express = require("express");
const router = express.Router();

router.get("/",function(req,res){
    res.send("hey its owners working");
});
module.exports = router;