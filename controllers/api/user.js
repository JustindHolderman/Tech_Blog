const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { User } = require('../../models/index');

router.get('/register', async (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;


    if (!username || !email || !password) {
        res.status(400).json({ message: 'All fields must be filled' });
        return;
    }

    try {
        const hashedPass = await bcrypt.hash(password, 10);
        const user = await User.create({ username, email, password: hashedPass });
        req.session.userId = user.id;
        req.session.user = user;
        req.session.loggedIn = true;

        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

module.exports = router;