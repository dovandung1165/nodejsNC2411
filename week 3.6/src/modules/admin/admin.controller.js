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

// const result = (serviceUsers, serviceProducts, serviceCate) => {
//     const totalUser = totalCal(serviceUsers)
//     const totalProduct = totalCal(serviceProducts);
//     const totalCate = totalCal(serviceCate);
//     return {
//         totalUser,
//         totalProduct,
//         totalCate
//     }
// } =>>> shittttt!!!

const totalUser = totalCal(serviceUsers)
const totalProduct = totalCal(serviceProducts);
const totalCate = totalCal(serviceCate);

//*  */
const resultPromise = (serviceUsers, serviceProducts, serviceCate) => {
    return Promise.all([serviceUsers, serviceProducts, serviceCate])
}


// const getAdminPage = (req, res, next) => {
//     result(serviceUsers, serviceProducts, serviceCate).totalUser
//         .then(a => {
//             result(serviceUsers, serviceProducts, serviceCate).totalProduct
//                 .then(b => {
//                     result(serviceUsers, serviceProducts, serviceCate).totalCate
//                         .then(c => res.render('admin', {
//                             usersTotal: a,
//                             productsTotal: b,
//                             categoriesTotal: c
//                         }))
//                 })
//         })
// }=>>> shitt

//*  */
const getAdminPage = (req, res, next) => {
    return resultPromise(totalUser, totalProduct, totalCate)
        .then(val => res.render('admin', {
            usersTotal: val[0],
            productsTotal: val[1],
            categoriesTotal: val[2]
        }))
}

module.exports = { getAdminPage }
