//Package Declaration

const express = require('express');
const router = express.Router();

//Homepage Route
router.get('/', async (req, res) => {
    res.render('homepage');
});

module.exports = router;