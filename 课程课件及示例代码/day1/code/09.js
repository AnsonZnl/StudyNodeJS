/**
 Created by www.it666.com
 */

// 1. 值类型
/*let num1 = 30;
let num2 = num1;
num1 += 10;
console.log(num1); // 40
console.log(num2); // 30*/

// 2.引用类型
/*
let obj1 = {};
let obj2 = obj1;
obj2.name = "张三";
console.log(obj1.name);
console.log(obj2.name);*/

/*let md = new Object();
md.exp = new Object({name: '哈哈哈'});

// let exp = md.exp;

// exp.name = "张三";
exp = {name: '张三'};
console.log(exp.name);

// console.log(exp.name);
console.log(md.exp.name);*/


let Person = require("./Person");

let p = new Person("张三", 19, "男");
console.log(p);

let vue = require("vue");
