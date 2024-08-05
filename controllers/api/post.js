const express = require('express');
const router = express.Router();
const {Post} = require('../../models')

router.get('/', async (req, res) => {
    req.sessionID('Posted');
});

module.exports = router;