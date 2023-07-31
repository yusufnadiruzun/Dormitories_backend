const connection = require("../../helpers/database/connectDatabase");
const createUrl = require("../../helpers/Methods/createUrl");

const addDataDb = (
  dorm_name,
  address,
  capacity,
  map,
  since,
  phone,
  universities,
  photos_url
) => {
    
  let url = createUrl(dorm_name);
  
  return new Promise((resolve, reject) => {
    let query = `INSERT INTO dorm (dorm_name,address,capacity,map,since,phone,url) VALUES ('${dorm_name}','${address}','${capacity}','${map}','${since}','${phone}','${url}')`;
    connection.query(query, function (err, result) {
      if (err) throw err;
      if (result.length == 0) {
        reject("false");
      } else {
        query = `SELECT dorm_id FROM dorm WHERE dorm_name = '${dorm_name}'`;
        connection.query(query, function (err, result) {
          if (err) throw err;
          if (result.length == 0) {
            reject("false");
          } else {
            let dorm_id = result[0].dorm_id;
            for (let university of universities) {
              
              query = `INSERT INTO dorm_universities (dorm_id,university_name) VALUES ('${dorm_id}','${university}')`;
              connection.query(query, function (err, result) {
                if (err) throw err;
                if (result.length == 0) {
                  reject("false");
                }
              });
            }
            for (let photo of photos_url) {
              query = `INSERT INTO dorm_photos (dorm_id,url) VALUES ('${dorm_id}','https://drive.google.com/uc?export=view&id=${photo}')`;
              connection.query(query, function (err, result) {
                if (err) throw err;
                if (result.length == 0) {
                  reject("false");
                } else {
                  resolve("success");
                }
              });
            }
          }
        });
      }
    });
  });
};

module.exports = addDataDb;
