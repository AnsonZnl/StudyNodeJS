/**
 Created by www.it666.com
 */

exports.sum = (...numbers)=>{
    let result = 0;
    numbers.forEach((item)=>{
        result += item;
    });
    return result;
};

exports.avg= (...numbers)=>{
    let result = 0;
    numbers.forEach((item)=>{
        result += item;
    });
    return result / numbers.length;
};

exports.age = 19;


