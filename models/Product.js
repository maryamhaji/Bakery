const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title:  
    {
        type:String,
        required:true
    },
    price:  
    {
        type:Number,
        required:true
    },
    quantity:  
    {
        type:Number,
        required:true
    },
    description:
    {
        type:String,
        required:true
    },

    taxable:
    {
        type:Boolean,
        required:true
    },
    dateCreated :
    {
        type:Date,
        default: Date.now()
    }
  });
  
  const productFormModel =mongoose.model("productForm", productSchema);
  
  module.exports=productFormModel;