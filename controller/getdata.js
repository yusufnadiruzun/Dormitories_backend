const getDataDb = require("../databaseOperations/data/getData");
const sendResponse = require("../helpers/response/sendResponse");

const getData = async (req, res) => {
    
    getDataDb().then((result) => { sendResponse(res, true, 200, result) }).catch((err) => sendResponse(res, false, 400, err));

}

module.exports = { getData };