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
        console.log(req.body);
        User.find({})
        .then((results) => {
            console.log(results);
        })
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

//this refers to getUser function in App.js of client side
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
        console.log("server side log out request recieved")
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})


//SCRIPT NEEDS TO BE FIGURED OUT
router.put('/save', (req, res) => {
    console.log(req.body.param.char1)
    console.log(req.body);
    User.findOneAndUpdate(
        {email: req.body.param.email}, 
        {$push: { character1: req.body.param.char1 }}, 
        // {new: true, upsert: true}
        )
})

module.exports = router