/**
 Made By 旋之华(yejh9522)
 */

exports.isReg = (userObj, users)=>{
    for(let i=0; i<users.length; i++){
        // 取出单个用户对象
        let user = users[i];
        // 判断
        if(user.userName === userObj.userName){
            return user;
        }
    }
};

exports.users = [];