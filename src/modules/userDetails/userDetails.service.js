const fs = require('fs');
const path = require('path');
const Promise = require('bluebird');

const getUsersFile = () => {
    return Promise.resolve(fs.readFileSync((path.join(__dirname, '../../../public/jsondata/users.json')), 'utf8'))
}

module.exports = { getUsersFile }