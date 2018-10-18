/*

  show dbs
// 创建数据库
use company
db

db.it666.insert([
   {cno: "1001", cname: "HTML5学院"},
   {cno: "1002", cname: "Python学院"},
   {cno: "1003", cname: "Java学院"},
   {cno: "1004", cname: "Go学院"}
]);


db.section.insert([
  {name: "胡雪", job: "辅导员", wages: 10000.0, cno: "1001", bonus: 1688},
  {name: "赵乐乐", job: "讲师", wages: 20000.0, cno: "1001", bonus: 2600},
  {name: "冯璐璐", job: "辅导员", wages: 12000.0, cno: "1001"},
  {name: "赵晓雪", job: "辅导员", wages: 12000.0, cno: "1002", bonus: 1688},
  {name: "孙芙蓉", job: "讲师", wages: 13000.0, cno: "1002", bonus: 1288},
  {name: "胡霍恋", job: "辅导员", wages: 11000.0, cno: "1003", bonus: 2688},
  {name: "张思琪", job: "班主任", wages: 9000.0, cno: "1003"},
  {name: "王红叶", job: "辅导员", wages: 8000.0, cno: "1002", bonus: 1675},
  {name: "叶子奇", job: "高级讲师", wages: 30000.0, cno: "1001", bonus: 2345},
  {name: "高伟伟", job: "辅导员", wages: 17000.0, cno: "1002", bonus: 1345}
]);

db.section.remove({});

db.section.find();

db.it666.find();
*/

//23. 创建company数据库, 将it666和section集合导入到数据库中
db.it666.find()
db.section.find()

//24.查询HTML5学院的所有老师
//(cno)
var cno = db.it666.findOne({cname:"财务部"}).cno;
db.section.find({cno:cno});

//25.查询销售部的所有员工
var cno = db.it666.findOne({cname:"财务部"}).cno;
db.section.find({cno:cno});

//26.查询工资大于20000的员工
db.emp.find({wages:{$gt:20000}});

//27.查询工资在10000-20000之间的员工
db.emp.find({wages:{$lt:20000 , $gt:10000}});

//28.查询工资小于10000或大于25000的员工
db.emp.find({$or:[{wages:{$lt:10000}} , {wages:{$gt:25000}}]});

//29.为所有薪资低于10000的员工增加工资1000元
db.emp.updateMany({wages:{$lte:10000}} , {$inc:{wages:1000}});
db.emp.find();

