/**
 Created by www.it666.com
 */

let express = require("express");
let app = express();

app.get("/", (req, res)=>{
     // res.send("Hello");
    // res.send({name: "旋之华", age: 18});
    // res.send("<input type='date'>");
    // res.status(404).send('Bad Request');

    res.write("it666");
    res.write("hhhhh");
    res.end("ccccc");
});

app.get("/:name/:age", (req, res)=>{
    // let name = req.params.name;
    let name = req.params["name"];
    let age = req.params["age"];
    res.write(age);
    res.end(name);
});

app.listen(3000);