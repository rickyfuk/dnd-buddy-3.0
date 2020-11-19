const express = require('express')
const router = express.Router()
const User = require('../database/models/user')
const passport = require('../passport/index');

router.post('/registeruser/', (req, res) => {
    console.log('user signup');

    const { email, password } = req.body
    // ADD VALIDATION
    User.findOne({ email: email }, (err, user) => {
        if (err) {
            console.log("for karl");
            console.log('User.js post error: ', err)
        } else if (user) {
            console.log("for alex");
            res.json({
                error: `Sorry, already a user with the email: ${email}`
            })
        }
        else {
            console.log("for ricky");
            const newUser = new User({
                email: email,
                password: password
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    function(req, res) {
        console.log('logged in', req.body);
        var userInfo = {
            email: req.body.email
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router