const connection = require('../../helpers/database/connectDatabase');

const getDataDb = () => {

    return new Promise((resolve, reject) => {
        /*
        let query = `SELECT *
        FROM dorm_universities du
        JOIN dorm d ON du.dorm_id = d.dorm_id
        JOIN dorm_photos dp ON d.dorm_id = dp.dorm_id;`
        */
       let query = `SELECT
       d.dorm_id,
       d.dorm_name,
       d.address,
       d.capacity,
       d.map,
       d.since,
       d.phone,
       d.url AS dorm_url,
       GROUP_CONCAT(DISTINCT du.university_name) AS universities,
       GROUP_CONCAT(DISTINCT p.url) AS dorm_photos
     FROM
       dorm d
     JOIN
       dorm_universities du ON d.dorm_id = du.dorm_id
     JOIN
       dorm_photos p ON d.dorm_id = p.dorm_id
     GROUP BY d.dorm_id;`        
        connection.query(query, function (err, result) {
            if (err) throw err;
            if (result.length == 0) {   
                reject("userToken not found");
            } else {
                resolve(result);
            }
        })});
}


module.exports = getDataDb;