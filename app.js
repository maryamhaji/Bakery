const express= require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const methodOverride = require('method-override');



//This loads all our environment variables from the keys.env
require("dotenv").config({path:'./config/keys.env'});

//import your router objects
const productRoutes = require("./routes/Product");


//creation of app object
const app = express();

//This allows your 
app.use(bodyParser.urlencoded({extended:false}));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));


//Create Express APP Ojbect
app.use(express.static('public'))


//MAPs EXPRESS TO ALL OUR  ROUTER OBJECTS
app.use("/",productRoutes);

//This tells Express to set Handlebars as its template engine
app.engine("handlebars",exphbs());
app.set("view engine","handlebars");

const MONGO_DB_URL =`mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0-gvp1k.mongodb.net/${process.env.MONGO_DB_DATABASE_NAME}?retryWrites=true&w=majority`;

//This allows Mongoose to connect to MongoDB
mongoose.connect(MONGO_DB_URL, {useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>{

    console.log(`You have successfully connected to your mongoDB database`);
})
.catch((err)=>{
    console.log(`Sorry, something occured :${err}`);
});











const PORT = process.env.PORT || 3000;
//Creates an Express Web Server that listens for incomin HTTP Requests
app.listen(PORT,()=>{
    console.log(`Your Web Server has been connected`);
    
});


