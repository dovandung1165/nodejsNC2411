//productDetails.route.js

const app = require('express');
const router = app.Router();

const controller = require('./userDetails.controller');
router.get('/admin/users/:userID', (req, res, next) => {
    controller.getParamsDetails(req.params.userID, req, res, next);
    // next();
}
);
module.exports = router;