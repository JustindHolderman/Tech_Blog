const express = require('express');
const router = express.Router();  

const apiRoutes = require('./api/index.js');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/', apiRoutes);  

module.exports = router;