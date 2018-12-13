var 
   http= require('http'),
   fs= require('fs')

var server= http.createServer(function(request, response){
    var url= request.url;
    if(url === '/'){
        fs.readFile('./index.html',function(err, data){
            if(!err){
                response.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
                response.end(data);
            }else{
                throw err;
            }
        })
    }else if(url === '/data'){
        fs.readFile('./data.json', function(err, data){
            if(!err){
                response.writeHead(200, {"Content-Type": "text/json;charset=UTF-8"});
                response.end(data);
            }else{
                throw err;
            }
        })
    }else{
        console.log("err");
    }
});
server.listen(8080);   
console.log("server is running at http://127.0.0.1:8080");
