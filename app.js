
const express  = require("express");
const app = express();
const date = require( __dirname + "/date.js")


const items = [];
const workItems = [];


app.set("view engine", "ejs");


app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));  


app.get("/", function(req,res){   

const day = date.getDate();
res.render("list", {listTitle : day, newListItem : items})
}) 

app.post("/", function(req, res){

let item = req.body.newItem
 if(req.body.list === "Work List"){
    workItems.push(item);
    res.redirect("/work")
 }else{
    items.push(item);
    res.redirect("/")
    }
})
 
app.get("/about", function(req,res){
    res.render("about")
})

app.get("/work", function(req, res){
    res.render("list", {listTitle:"Work List", newListItem : workItems})
})


app.listen("2000", function(){
    console.log("server started on port 2000")
})