const userFile = require('../users/users.service');
const productFile = require('../products/products.service');
const cateFile = require('../categories/categories.service');

const serviceUsers = userFile.getUsersFile();
const serviceProducts = productFile.getProductsFile();
const serviceCate = cateFile.getCategoriesFile();

const totalCal = (service) => {
    return service
        .then(data => JSON.parse(data))
        .then(data => data.body)
        .then(list => list.length)
}

const result = (serviceUsers, serviceProducts, serviceCate) => {
    const totalUser = totalCal(serviceUsers)
    const totalProduct = totalCal(serviceProducts);
    const totalCate = totalCal(serviceCate);
    return {
        totalUser,
        totalProduct,
        totalCate
    }
}
const getAdminPage = (req, res, next) => {
    result(serviceUsers, serviceProducts, serviceCate).totalUser
        .then(a => {
            result(serviceUsers, serviceProducts, serviceCate).totalProduct
                .then(b => {
                    result(serviceUsers, serviceProducts, serviceCate).totalCate
                        .then(c => res.render('admin', {
                            usersTotal: a,
                            productsTotal: b,
                            categoriesTotal: c
                        }))
                })
        })
}
module.exports = { getAdminPage }
