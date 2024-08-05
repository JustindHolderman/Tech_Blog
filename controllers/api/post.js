//Declaration of packages
const express = require('express');
const router = express.Router();
const {Post} = require('../../models')

//Route for a post
router.get('/', async (req, res) => {
    req.sessionID('Posted');
});

module.exports = router;