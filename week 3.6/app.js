const express = require('express');
const app = express();
const path = require('path');
const usersRoute = require('./src/modules/users/users.router');
const cateRoute = require('./src/modules/categories/categories.router');
const productsRoute = require('./src/modules/products/products.router');
const productDetailsRoute = require('./src/modules/productDetails/productDetails.route');
const userDetailsRoute = require('./src/modules/userDetails/userDetails.route');
const adminRoute = require('./src/modules/admin/admin.route');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('/', [usersRoute, cateRoute, productsRoute, productDetailsRoute, userDetailsRoute, adminRoute]);
app.listen(3000, () => { console.log("Listen=ing port 3000") })

module.exports = app;