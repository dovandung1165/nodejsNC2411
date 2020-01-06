const fs = require('fs');
const path = require('path');
const Promies = require('bluebird');

const getProductsFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile((path.join(__dirname, '../../../public/jsondata/products.json')), 'utf8', (err, data) => {
      if (err) console.err(err);
      resolve(data);
    })
  })
}

module.exports = { getProductsFile }