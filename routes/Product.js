/*********************Products ROUTES***************************/
const express = require('express')
const router = express.Router();
const productForm = require("../models/Product");

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

////Route to fetch all tasks
router.get("/list",(req,res)=>
{

    productForm.find()
    .then((ProductForm)=>{
        res.render("product/productList",
        {
            lists:ProdectForm
        });
    })
    .catch(err=>console.log(`Error : ${err}`));
});

//Route to direct user to the product edit form page
router.get("/edit/:id",(req,res)=>{

    productForm.findById(req.params.id)
    .then((ProductForm)=>{
        res.render("product/productEditForm",{
            productDocument:ProductForm
        })
    })
    .catch(err=>console.log(`Error : ${err}`));
})


//Route to update a product based on the information entered in the product form
router.put("/edit/:id",(req,res)=>
{
    productForm.findById(req.params.id)
    .then((ProductForm)=>{

        ProductForm.title=req.body.title;
        ProductForm.price=req.body.price;
        ProductForm.quantity=req.body.quantity;
        ProductForm.description=req.body.description;
    

        ProductForm.save()

        .then(()=>{
           res.redirect("/list") 
        })
        .catch(err=>console.log(`Error : ${err}`));

    })
    .catch(err=>console.log(`Error : ${err}`));
});
























module.exports=router;