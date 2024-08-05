//Package Declaration
const express = require('express');
const router = express.Router();
const { Comment } = require('../../models');

//Comment route
router.get('/', async (req, res) => {
    res.json('Comments');
});

module.exports = router;