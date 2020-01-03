const app = require('express');
const router = app.Router();

const controller = require('./users.controller');

router.get('/admin/users', controller.getUsers);

module.exports = router;


