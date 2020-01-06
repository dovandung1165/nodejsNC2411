const fs = require('fs');
const Promise = require('bluebird');
const path = require('path');

const getCategoriesFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile((path.join(__dirname, '../../../public/jsondata/categories.json')), 'utf8', (err, data) => {
      if (err) console.error(err);
      resolve(data);
    })
  })
}

module.exports = { getCategoriesFile };
