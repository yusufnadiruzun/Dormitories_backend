const bcrypt = require("bcryptjs");
const sendResponse = require("../../helpers/response/sendResponse");

const sendUserToken = (userName, password,res) => {
    console.log(userName, password)
  
    sendResponse(res, true, 200, {userName:userName,token: userToken});

};



module.exports = {sendUserToken};
