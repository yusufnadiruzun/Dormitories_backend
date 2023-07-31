const addDataDb = require("../databaseOperations/data/addData");
const sendResponse = require("../helpers/response/sendResponse");

const addData = async (req, res) => {
    const { dorm_name,address,capacity,map,since,phone,universities,photos_url } = req.body;
    addDataDb(dorm_name,address,capacity,map,since,phone,universities,photos_url).then((result) => { sendResponse(res, true, 200, result) }).catch((err) => sendResponse(res, false, 400, err));

}

module.exports = { addData };