const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/templates/views"));
hbs.registerPartials(path.join(__dirname, "/templates/partials"));
app.get("/", (req, res) => {  
    res.render("index", {    
        title: "Home",    
        name: "Arash Arora",  
    });
});
app.get("/about", (req, res) => {  
    res.render("about", {    
        title: "About",    
        name: "Arash Arora",  
    });
});
app.listen(3000, () => {  
    console.log("Listening on port 3000");
});