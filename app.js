const express= require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

//import your router objects
const productRoutes = require("./routes/Product");



//creation of app object
const app = express();

//This allows your 
app.use(bodyParser.urlencoded({extended:false}));

//MAPs EXPRESS TO ALL OUR  ROUTER OBJECTS
app.use("/",productRoutes);

//This tells Express to set Handlebars as its template engine
app.engine("handlebars",exphbs());
app.set("view engine","handlebars");









const PORT = process.env.PORT || 3000;
//Creates an Express Web Server that listens for incomin HTTP Requests
app.listen(PORT,()=>{
    console.log(`Your Web Server has been connected`);
    
});


