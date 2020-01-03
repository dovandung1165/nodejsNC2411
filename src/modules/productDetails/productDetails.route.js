//productDetails.route.js

const app = require('express');
const router = app.Router();

const controller = require('./productDetails.controller');
router.get('/admin/products/:productID', (req, res, next) => {
    controller.getParamsDetails(req.params.productID, req, res, next);
    // next();
}
);
module.exports = router;