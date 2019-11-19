/*********************Products ROUTES***************************/
const express = require('express')
const router = express.Router();
const Task = require("../models/Product");

//Route to direct use to list product
router.get("/",(req,res)=>
{
    res.render("product/productDashboard");
});


router.get("/add",(req,res)=>
{
    res.render("product/productAddForm");
});

//Route to process user's request and data when the user submits the add Product form
router.post("/add",(req,res)=>
{
   const newproductForm=
   {
       title:req.body.title,
       price:req.body.price,
       quantity:req.body.quantity,
       description:req.body.description,
       taxable:req.body.taxable,
       
  }

  const  ProductForm = new productForm(newproductForm)
  ProductForm.save()
  .then(()=>{
    console.log(`Task was added to the database`);
    console.log(`${ProductForm}`);
    res.redirect("/product/list");

})
.catch(err=>console.log(`Error : ${err}`));

});






















module.exports=router;