// express.Router() ek mini app hota hai Express ke andar.Iska use hum routes ko alag files me divide karne ke liye karte hain.
const express = require("express");
const router = express.Router();
const ownermodel = require("../models/owner");

router.get("/", function(req, res) {
    res.send("hey its owners working");
});

// console.log(process.env.NODE_ENV);just to check whether kuch h ki nhi uske andr
if (process.env.NODE_ENV === "development") {
    
    router.post("/create", async function(req, res) {
        try {
            // Hum pehle database mein check kar rahe hain ki koi owner pehle se toh nahi hai
            let owners = await ownermodel.find();
            
            if (owners.length > 0) {
                // Status 403 (Forbidden) zyada sahi hai "Already Exists" ke liye
                return res.status(403).send("Owner already exists! You cannot create more than one");
            }

            // Destructuring: req.body se data nikalna (Industrial Standard)
            let { fullname, email, password } = req.body;

            // Database mein naya owner create karna
            let createdowner = await ownermodel.create({
                fullname,
                email,
                password, // NOTE: Future mein hum ise hash (secure) karenge
            });

            // 201 status matlab "Successfully Created"
            res.status(201).send(createdowner);

        } catch (err) {
            // Agar database fail ho jaye ya koi field miss ho toh ye error handle karega
            res.status(500).send("Database Error: " + err.message);
        }
    });
}
router.get("/admin", async (req, res) => {
  let success = req.flash("success") ;
    res.render('createproduct',{success});
  });

// router.post('/')
module.exports = router;