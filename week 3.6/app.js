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
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', [usersRoute, cateRoute, productsRoute, productDetailsRoute, userDetailsRoute, adminRoute]);
app.listen(3030, () => { console.log("Listen=ing port 3000") })

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    return res.status(404).send(`<h1>404 Error<h1><h3>Route ${req.url} Not found.</h3>`);
    next();
})

module.exports = app;