const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    image: Buffer, // Image Buffer format mein hi honi chahiye, ye sahi h
    name: String,
    price: Number,
    discount: {
        type: Number,
        default: 0
    },
    bgcolor: String,
    panelcolor: String, 
    textcolor: String,
});

module.exports = mongoose.models.product || mongoose.model("product", productSchema);