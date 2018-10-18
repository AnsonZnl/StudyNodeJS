/**
 Created by www.it666.com
 */

let express = require("express");
let app = express();

app.get("/", (req, res)=>{
    console.log(req.url);
    res.send("Hello World!");
});

app.get("/html5", (req, res)=>{
    console.log(req.url);
    res.send("HTML5");
});

app.get("/html5/c1", (req, res)=>{
    console.log(req.url);
    res.send("HTML5----c1");
});

app.get("/it666/:name", (req, res)=>{
    console.log(req.params.name);
    res.send("IT666");
});

app.listen(3000);