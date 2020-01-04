const Promise = require('bluebird');
const fs = require('fs');
const path = require('path');

// const getUsers = () => {
//     fs.readFileSync(path.relative(__dirname, '../../../public/jsondata/users.json'), 'utf8')
//         .then(JSON.parse)
//         .then(val => val.status)
//         .catch(err => console.error(err))
// }

const getUsersFile = () => {
    return Promise.resolve(fs.readFileSync((path.join(__dirname, '../../../public/jsondata/users.json')), 'utf8'))
}
module.exports = { getUsersFile };