const fs = require('fs');
const path = require('path');
const Promies = require('bluebird');

const getProductsFile = () => {
    return Promise.resolve(fs.readFileSync((path.join(__dirname, '../../../public/jsondata/products.json')), 'utf8'))
}

module.exports = { getProductsFile }