const fs = require('fs');
const Promise = require('bluebird');
const path = require('path');

const getCategoriesFile = () => {
    return Promise.resolve(fs.readFileSync(path.join(__dirname, "../../../public/jsondata/categories.json"), 'utf8'))
}

module.exports = { getCategoriesFile };
