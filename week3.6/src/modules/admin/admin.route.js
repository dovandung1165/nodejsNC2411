const app = require('express');
const router = app.Router();
const controller = require('./admin.controller');

router.get('/admin', controller.getAdminPage);

module.exports = router;