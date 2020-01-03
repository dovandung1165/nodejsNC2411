const service = require('./productDetails.service');

const getParamsDetails = (param, req, res, next) => {
    return service.getProductsFile()
        .then(data => JSON.parse(data))
        .then(productAll => productAll.body)
        .then(body => body.find(elemet => elemet._id === param))
        .then(product => res.render('productDetails', { product: product }))
        .catch(err => {
            console.log("Failed getProductDetails", err);
            next(err);
        })
}

module.exports = { getParamsDetails };

