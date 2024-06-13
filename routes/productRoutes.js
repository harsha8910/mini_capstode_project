//import express module
const express = require('express')
//create router instance
const router = express.Router()
//import productApi
const productApi = require('../apis/productApis')
//fetch all records
router.get("/fetch", productApi.products_all)

const userApi = require('../apis/userApis')
router.get("/ret", userApi.fetch_user)
router.post("/auth", userApi.auth_user)
router.post("/signup", userApi.insert_user)

const cartApi = require('../apis/cartApis')

router.post("/cart", cartApi.fetch_cart)
router.post("/addcart", cartApi.insert_cart)
router.put("/update", cartApi.update_cart)
router.delete("/delete", cartApi.delete_cart)
module.exports = router