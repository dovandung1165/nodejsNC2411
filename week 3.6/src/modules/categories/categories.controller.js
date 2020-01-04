const service = require('./categories.service');

const getCategories = (req, res, next) => {
    return service.getCategoriesFile()
        .then(data => JSON.parse(data))
        .then(categoriesAll => categoriesAll.body)
        .then(categories => res.render('categories', { categories }))
        .catch(err => {
            console.error("Failed getCategories", err);
            next(err);
        })
}
// getCategories();
module.exports = { getCategories }