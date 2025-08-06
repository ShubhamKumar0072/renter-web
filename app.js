const express = require("express");
const app = express();
let port = 8080;

const path = require("path");
app.set("views",path.join(__dirname,"/views"));
const ejsMate = require("ejs-mate");
app.engine('ejs', ejsMate);

app.use(express.static(path.join(__dirname,"public")));

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",(req,res)=>{
    res.render("pages/home.ejs");
});















app.listen(port,()=>{
    console.log("listning from port",port);
});