
//Package declarations
const express = require('express');
const router = express.Router();

const userRoutes = require('./user');
const postRoutes = require('./post');
const commentRoutes = require('./comment');

//Importing routes into index.js
router.use('/posts', postRoutes);  
router.use('/comments', commentRoutes);
router.use('/users', userRoutes);


module.exports = router;