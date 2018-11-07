let http= require('http');
let url= require('url');
let mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/m_data');
let db= mongoose.connection;
db.on('open', ()=>{
    console.log('连接成功！')
})
//2. 新建Schema （表）
let Schema= mongoose.Schema;
//定义personSchema的字段（规则） 有点像构造函数的样子
let personSchema= new Schema({
    name: String,
    sex: String,
    age: Number
});
//3. 创建model（集合）
let personModel= mongoose.model('person', personSchema);
console.log('2')

let server= http.createServer((request, response)=>{
   response.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
   response.end("<script>alert('提交成功！'); </script>")
   //拿到提交的数据
   let myURl= url.parse(request.url, true);//解析url
   let queryObj= myURl.query;//拿到解析后的url对象里的query  他里面是提交的数据
   //4. 创建一个Document(文档)
   let person= new personModel(queryObj)
   console.log(person)
  //5. 把创建的文档对象 塞进这个personModel集合当中  Document.prototype.save();
  person.save((err,data)=>{
    if(!err){
        console.log('保存成功！');
    }else{
        console.log('保存失败！')
    }
  })
});
server.listen(8085, '127.0.0.1')




