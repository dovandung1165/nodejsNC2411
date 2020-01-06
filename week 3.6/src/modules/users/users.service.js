const Promise = require('bluebird');
const fs = require('fs');
const path = require('path');

const getUsersFile = () => {
    return new Promise((resolve, reject) => {
        fs.readFile((path.join(__dirname, '../../../public/jsondata/users.json')), 'utf8', (err, data) => {
            if (err) console.error(err);
            resolve(data);
        })
    })
}

module.exports = { getUsersFile };
