/**
 Created by www.it666.com
 */

let express = require("express");
let app = express();

app.use(express.static("./public"));
//app.use("/file",express.static("./file"));

app.get("/", (req, res)=>{
    res.send("Hello World!");
});

app.listen(80);