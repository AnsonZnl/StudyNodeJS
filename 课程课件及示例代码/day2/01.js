/**
 Created by www.it666.com
 */

/*
let buffer = new Buffer(10);
console.log(buffer);
*/

/*
   00 - ff
   0 - 255
   00000000 - 11111111
   0 或 1 代表1位(bit)
   8 bit = 1B
   1KB = 1024B
   1MKB = 1024KB
   1GB = 1024KB
   1TB = 1024GB
*/



// 1. 字符串转成二进制
/*// let str = "www.it666.com";
let str = "旋之华";
let buffer = Buffer.from(str);
console.log(buffer);
console.log(buffer.length);
console.log(str.length);
console.log(buffer.toString());*/


// 2. Buffer.alloc(size[, fill[, encoding]])
/*
  初始化: 确定的长度
*/
let buffer2 = Buffer.alloc(20);
buffer2[0] = 10;
buffer2[1] = 12;
buffer2[2] = 0xfc;
buffer2[19] = 11;
buffer2[20] = 11;
// console.log(buffer2);
buffer2.forEach((item, index)=>{
    console.log(index + ":" + item);
});