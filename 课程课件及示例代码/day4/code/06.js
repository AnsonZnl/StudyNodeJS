/**
 Created by www.it666.com
 */
let http = require("http");
let url = require("url");
let querystring = require("querystring");
let formidable = require('formidable');
let util = require("util");


http.createServer((req, res)=>{
    if(req.url === "/postmsg" && req.method.toLowerCase() === "post"){
        // 1.实例化对象
        let form = new formidable.IncomingForm();

        // 2. 设置上传的文件路径
        form.uploadDir = "./uploads";

        // 3. 获取表单的内容
        form.parse(req, (err, fields, files) =>{

            res.writeHead(200, {'content-type': 'text/plain;charset=UTF-8'});
            res.write('received upload:\n\n');
            res.end(util.inspect({fields: fields, files: files}));
        });
    }

}).listen(80, "127.0.0.1");