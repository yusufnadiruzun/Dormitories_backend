const connection = require("../../helpers/database/connectDatabase");
const bcrypt = require("bcryptjs");

const signupdb = (user_name, hashpassword, usertoken) => {
  console.log("signdb usertoken :: ",usertoken)
  return new Promise((resolve, reject) => {
      let query = `INSERT INTO user(user_name, password,usertoken) VALUES ('${user_name}','${hashpassword}','${usertoken}');`;
      connection.query(query, function (err, result) {
        if (err) throw (err);
        resolve(user_name,usertoken);
      });
    
  });
};

const logindb = (userName, password) => {
  console.log("logindb", userName, password);
  return new Promise((resolve, reject) => {
   
    let query = `SELECT * FROM user WHERE user_name='${userName}'`;
    connection.query(query, function (err, result) {
      if (err) console.log(err);
      if (result.length == 0) {
        console.log("ilkif");

        reject("Kullanıcı adı veya şifre hatalı");
      } else if (!bcrypt.compareSync(password, result[0].password)) {
        console.log(result[0].password);
        console.log("elseif");

        reject("Kullanıcı adı veya şifre hatalı");
      } else {
        console.log("else");
        resolve(result);
      }
      3;
    });
  });
};

const loginTokendb = (usertoken) => {
  return new Promise((resolve, reject) => {
    let query = `select * from user`;
    connection.query(query, function (err, result) {
      if (err) throw err;
      if (result.length == 0) {
        reject("userToken not found");
      } else {
        for (let i = 0; i < result.length; i++) {
          if (usertoken == result[i].usertoken) {
            return resolve(result[i]);
          }
        }
        reject("userToken not found");
      }
    });
  });
};


module.exports = {signupdb,logindb,loginTokendb};
