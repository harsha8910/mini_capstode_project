const mongoose = require('mongoose')
//create schema
const cartSchema = new mongoose.Schema({
    p_id: Number,
    p_name: String,
    p_img: String,
    p_qunt: Number,
    u_name: String
})
module.exports = mongoose.model("Cart", cartSchema)