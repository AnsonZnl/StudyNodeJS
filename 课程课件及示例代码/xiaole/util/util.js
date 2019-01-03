//存放数据
exports.users= [];

//判断提价的用户名是否存在
exports.isReg= (userObj, users)=>{
    for(var i=0; i<users.length; i++){
      //取出单个用户对象
      let user= users[i];
      console.log('注册表',users[i])
      //判断
      if(user.userName === userObj.userName){
          return user;
      }
    }
  }


  