//1.创建并进入it_666数据库
use it_666

//2.向数据库的colleges集合中插入六个文档(Html5, Java, Python, 区块链, K12, <PHP, "世界上最好的编程语言">)  
db.colleges.insert(
   { name:"html5"},
   { name:"java"},
   { name:"python"},
   { name:"区块链"},
   { name:"K12"},
   { name:"PHP", intro:"世界上最好的编程语言"}
);

//3.查询colleges集合中的文档
db.colleges.find();

//4.向数据库的colleges集合中插入一个文档(Golang)   
db.colleges.insert({
    name:"Golang"
});
   
//5.统计数据库colleges集合中的文档数量
db.colleges.find().count();

//6.查询数据库colleges集合中name为Html5的文档
db.colleges.find({name:"Html5"});

//7.向数据库colleges集合中的name为Html5的文档，添加一个intro属性，属性值为"打通全栈任督二脉!"
db.colleges.update({name:"Html5"},{$intro:{address:"打通全栈任督二脉!"}});

//8.使用{name:"大数据"} 替换 name 为 "K12"的文档
db.colleges.replaceOne({name:"K12"},{username:"大数据"});    
    
//9.删除name为PHP的文档的intro属性
db.colleges.update({name:"PHP"},{$unset:{intro:"世界上最好的编程语言"}});


//10.向name为Html5的文档中，添加一个classes:{base:["h5+c3","js","jQuery", "abc"] , core:["三大框架","node.js"]}
//MongoDB的文档的属性值也可以是一个文档，当一个文档的属性值是一个文档时，我们称这个文档叫做 内嵌文档
db.colleges.update({name:"Html5"},{$set:classes:{base:["h5+c3","js","jQuery", "abc"], core:["三大框架","node.js"]}}});
db.colleges.find();

//11.查询有核心课程为 三大框架 的文档
//MongoDB支持直接通过内嵌文档的属性进行查询，如果要查询内嵌文档则可以通过.的形式来匹配
//如果要通过内嵌文档来对文档进行查询，此时属性名必须使用引号 
db.colleges.find({'classes.core':"三大框架"});

//14.向name为Html5的文档中，添加一个新的核心课程 "微信小程序"
//$push 用于向数组中添加一个新的元素
//$addToSet 向数组中添加一个新元素 ， 如果数组中已经存在了该元素，则不会添加
db.colleges.update({name:"Html5"},{$push:{"hobby.core":"微信小程序"}});
db.colleges.update({name:"Html5"},{$addToSet:{"hobby.core":"微信小程序"}});
db.colleges.find();

//15.向name为Html5的文档中，删除基础课程"abc"
db.colleges.remove({"classes.base":"abc"});

//16.删除user集合
db.colleges.remove({});
db.colleges.drop();

show dbs;

//17.向集合中中插入10000个文档 7.2s
for(var i=1 ; i<=10000 ; i++){
    db.demos.insert({num:i});
}

db.demos.find()

db.demos.remove({});


//0.4s
var arr = [];

for(var i=1 ; i<=10000 ; i++){
    arr.push({num:i});
}

db.demos.insert(arr);



