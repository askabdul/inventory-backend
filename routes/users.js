let express = require('express');
let UserModel = require('./../models/Users')
let md5 = require('md5')
let router = express.Router();

// Route for registering new user
router.post('/add-user', async (req, res) => {
    let data = await req.body;
    let user = new UserModel();
    user.firstName = data.firstName;
    user.lastName = data.lastName;
    user.email = data.email;
    user.password = md5(data.password);


    let savedUser = await user.save().then((user) => {
        return user
    }).catch((err) => {
        console.log(err)
    });

    if(savedUser){
        res.send(
            {message:'Registration successful', 
            data: {
                firstName: savedUser.firstName,
                lastName: savedUser.lastName,
                email: savedUser.email
            },
        })
    }
})


router.get('/', async (req,res) => {
    let users  = await UserModel.find().then((users) => {
        return users
    }).catch((err) => {
        console.log(err)
    })

    if(users){
        res.json(users)
    }
})


router.delete('/delete', async (req,res) => {
    let userId = req.query.userId;
    let del = await UserModel.deleteOne({_id: userId}).then((del) => {
        return del;
    })

    if(del){
        res.json({message: 'success'});
    }
})


router.get('/:userId', async (req,res) => {
    let userId = req.params.userId;
    let user = await UserModel.findById({_id: userId})
    .then((user) => {
        return user;
    }).catch((err) => {
        console.log(err);
    })

    if(user){
        res.json({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            userId: user.id
        })
    }
})


router.put('/update-user', async (req,res) => {
    let userId = req.body.userId;
    
    let update = await UserModel.updateOne({_id:userId},{
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    }).exec().then((up) => {
        console.log(up)
        return up
    }).catch((err) => {
        console.log(err)
    })

    if(update){
        let user = await UserModel.find().then((user) => {
            return user;
        }).catch((err) => {
            console.log(err);
        })

        if(user) {
            res.json(user)
        }
    }
})

module.exports = router;