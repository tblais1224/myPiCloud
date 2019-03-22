//Thomas Blais ------ TBlais Productions --------
//A website for projects, cloud storage and playing flash games.

const express = require("express");
const app = express();
const bodyParser = require("body-parser"); 

app.use(express.static("public")); //sets public folder as the external file folder    
app.set("view engine", "ejs"); //sets the view engine to .ejs so the res.render(something.ejs) so dont need to put .ejs
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.render("main");
});

app.listen("3000", function(){
    console.log("myPiCloud is now online, PORT 3000");
});