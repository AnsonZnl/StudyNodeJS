/**
 Created by www.it666.com
 */
let http = require("http");
let url = require("url");
let querystring = require("querystring");
let formidable = require('formidable');
let util = require("util");
let uuidv1 = require('uuid/v1');
let path = require("path");
let fs = require("fs");


http.createServer((req, res)=>{
    if(req.url === "/postmsg" && req.method.toLowerCase() === "post"){
        // 1.实例化对象
        let form = new formidable.IncomingForm();

        // 2. 设置上传的文件路径
        form.uploadDir = "./uploads";

        // 3. 获取表单的内容
        form.parse(req, (err, fields, files) =>{

            // 3.1 生成随机的名称
            let name = uuidv1();

            // 3.2 获取上传文件的后缀
            let extName = path.extname(files.photo.name);

            // 3.3 设置路径
            let oldPath = __dirname + "/" + files.photo.path;
            let newPath = __dirname + "/uploads/" + name + extName;

            // 3.4 改名
            fs.rename(oldPath, newPath, (err)=>{
                if(!err){
                    res.writeHead(200, {'content-type': 'text/html;charset=UTF-8'});
                    res.write("写入成功");
                    res.end(util.inspect({fields: fields, files: files}));
                }else {
                    throw  err;
                }
            });
        });
    }

}).listen(80, "127.0.0.1");