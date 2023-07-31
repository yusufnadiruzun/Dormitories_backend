const { logindb, signupdb,loginTokendb } = require("../databaseOperations/auth/auth");
const {sendUserToken} = require("../helpers/authorization/sendTokenToClient");
const sendResponse = require("../helpers/response/sendResponse");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
    
  const { userName, password} = req.body;
  console.log(userName, password)
  let hashPassword = bcrypt.hashSync(password, 10);
  let usertoken = bcrypt.hashSync(userName + password, 10);  
  
  return signupdb(userName, hashPassword, usertoken)
    .then((result) => sendResponse(res,"success",200 ,usertoken))
    .catch((err) =>  console.log(err));
};

const login = async (req, res) => {

  const { userName, password, usertoken } = req.body;
  
  if(usertoken == ""){
    console.log("ilk if");
    
  logindb(userName, password)
    .then((result) => sendResponse(res,"success",200 ,result[0].usertoken))
    .catch((err) => sendResponse(res, false, 400, err));
  }
  else{
    loginTokendb(usertoken)
    .then((result) => sendResponse(res,"success",200 ,usertoken))
    .catch((err) => sendResponse(res, false, 400, err));
  } 
};


module.exports = { signup,login };
