/*********************Products ROUTES***************************/
const express = require('express')
const router = express.Router();
const Task = require("../models/Product");

//Route to direct use to list product
router.get("/",(req,res)=>
{
    res.render("product/productDashboard");
});





















module.exports=router;