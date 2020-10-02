let express = require('express');
let md5 = require('md5');
let jwt = require('jsonwebtoken')
const UserModel = require('../models/Users');
let authRouter = express.Router();


// Route for logging new user
authRouter.post('/login', async (req, res) => {
    let email = req.body.email
    let password = req.body.password
    let hashPassword = md5(password)

    if (email === '') {
        res.send('Email required')
    }

    if (password === '') {
        res.send('Password required')
    }

    let user = await UserModel.findOne({
        email: email,
        password: hashPassword
    }).then((user) => {
        return user
    }).catch((err) => {
        console.log(err)
    })

    let token = jwt.sign({
        data: {
            email: user.email,
            userId: user._id
        }
    }, 'BIG_SECRET', { expiresIn: '1h' });

    res.json({
        firstName: user.firstName,
        lastName: user.lastName,
        token: token
    })
});


module.exports = authRouter;