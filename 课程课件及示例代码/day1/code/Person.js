/**
 Created by www.it666.com
 */
function Person(name, sex, age) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

Person.prototype = {
    eat: function () {
        console.log(this.name + '再吃饭');
    }
};

module.exports = Person;