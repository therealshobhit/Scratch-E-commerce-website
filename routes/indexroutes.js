const express = require('express');
const router = express.Router();
const productSchema = require('../models/product');
const islogeedin = require('../middlewares/isloggedin');
const usermodel = require('../models/user');

router.get("/", function (req, res) {
    let error = req.flash("error");
    let message = req.flash("message")
    res.render("index", { message,error, loggedin: false });
  });

router.get('/shop' , islogeedin , async function(req,res){
  let products = await productSchema.find();
  // for flash message we need to do this like put in success then put in render 
  let success= req.flash("Success")
  res.render('shop', {products,success});
})
router.get('/cart', islogeedin, async function(req, res) {
    // populate('cart') se humein IDs ki jagah poora product data mil raha hai
    let user = await usermodel.findOne({ email: req.user.email }).populate("cart");

    let bill = 0;

    //  yahan check lagana zaroori hai taaki empty cart crash na ho
    if (user.cart && user.cart.length > 0) {
        // Har product ka price aur discount calculate karke 'bill' mein add karo
        user.cart.forEach(item => {
            // Price + Platform Fee (20) - Discount
            // Number() convert karna badhiya practice hai as you mentioned
            bill += (Number(item.price) + 20) - Number(item.discount);
        });
    }

    res.render("cart", { user, bill });
});
router.get('/addtocart/:id' , islogeedin , async function(req,res){
  let user = await usermodel.findOne({email: req.user.email})
  user.cart.push(req.params.id);
  await user.save();
  console.log("added to cart")
  res.redirect("/shop")
})

 // Ye route specific item ki ID pakadta h aur usey user ke cart se gayab kar deta h.
router.get('/removefromcart/:id', islogeedin, async function(req, res) {
    try {
        // // $pull ek MongoDB operator h jo array se match hone wali cheez delete kar deta h
        await usermodel.findOneAndUpdate(
            { email: req.user.email },
            { $pull: { cart: req.params.id } }
        );

        req.flash("Success", "Item removed");
        res.redirect("/cart");
    } catch (err) {
        res.send("Galti ho gayi : " + err.message);
    }
});

router.get('/cart/:userid' , islogeedin , (req,res)=>{
  res.render('cart');
});

module.exports = router;