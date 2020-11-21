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
router.put('/save1', (req, res) => {
    // console.log(req.body.param.character1)
    // console.log(req.body);
    User.findOneAndUpdate(   
        {email: req.body.param.email},
        {$set: 
            {character1: 
                {
                    name: req.body.param.character1.name,
                    gender: req.body.param.character1.gender,
                    race: req.body.param.character1.race,
                    charClass: req.body.param.character1.charClass
                }
            }
        } 
        )
        .then(userObject => {
            console.log(userObject)
        })
        .catch(err => {
            res.json(err);
        })  
})

router.put('/save2', (req, res) => {
    // console.log(req.body.param.character1)
    // console.log(req.body);
    User.findOneAndUpdate(   
        {email: req.body.param.email},
        {$set: 
            {character2: 
                {
                    name: req.body.param.character2.name,
                    gender: req.body.param.character2.gender,
                    race: req.body.param.character2.race,
                    charClass: req.body.param.character2.charClass
                }
            }
        } 
        )
        .then(userObject => {
            console.log(userObject)
        })
        .catch(err => {
            res.json(err);
        })  
})
router.put('/save3', (req, res) => {
    // console.log(req.body.param.character1)
    // console.log(req.body);
    User.findOneAndUpdate(   
        {email: req.body.param.email},
        {$set: 
            {character3: 
                {
                    name: req.body.param.character3.name,
                    gender: req.body.param.character3.gender,
                    race: req.body.param.character3.race,
                    charClass: req.body.param.character3.charClass
                }
            }
        } 
        )
        .then(userObject => {
            console.log(userObject)
        })
        .catch(err => {
            res.json(err);
        })  
})

router.get('/loadCharacter1', (req, res) => {
    console.log(req.session.passport.user._id);
    User.findOne(
        {_id: req.session.passport.user._id}
    )
    .then(results => {
        console.log(results.character1)
        res.json(results.character1)
    })
    .catch(err => {
        res.json(err);
    })  
})
router.get('/loadCharacter2', (req, res) => {
    console.log(req.session.passport.user._id);
    User.findOne(
        {_id: req.session.passport.user._id}
    )
    .then(results => {
        console.log(results.character2)
        res.json(results.character2)
    })
    .catch(err => {
        res.json(err);
    })  
})
router.get('/loadCharacter3', (req, res) => {
    console.log(req.session.passport.user._id);
    User.findOne(
        {_id: req.session.passport.user._id}
    )
    .then(results => {
        console.log(results.character3)
        res.json(results.character3)
    })
    .catch(err => {
        res.json(err);
    })  
})



module.exports = router