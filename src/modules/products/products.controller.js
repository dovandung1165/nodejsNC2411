const service = require('./products.service');

const getProducts = (req, res, next) => {
    return service.getProductsFile()
        .then(data => JSON.parse(data))
        .then(productAll => productAll.body)
        .then(products => res.render('products', { products }))
        // .then(products => res.render('admin', { productTotal: products.length }))
        .catch(err => {
            console.error("Failed getProducts", err);
            next(err);
        })
}

module.exports = { getProducts };