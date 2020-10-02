let express = require('express');
let bodyParser = require('body-parser')
let mongoose = require('mongoose');

let cors = require('cors');

let port = 4000;
let app = express();
let router = express.Router()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(router)

app.use('/users', require('./routes/users'))
app.use('/auth', require('./routes/auth'))
app.use('/products', require('./routes/products'))

// app.get('/', (req,res,next) => {
//     res.send('successfully connected front to backend')
// })

// app.get('/user', (req,res,next) => {
//     res.send(new Date().toLocaleDateString())
// })

// app.get('/users', (req,res,next) => {
//     let firstname = req.query.firstname
//     let users = [
//         {
//             firstName: 'Rich',
//             lastName: 'Amofa',
//             age: 35
//         },
//         {
//             firstName: 'Aaron',
//             lastName: 'Cahill',
//             age: 45
//         }
//     ]

//     if(req.query.hasOwnProperty('firstname')){
//         let fndUser = users.filter((user, index) => {
//             if (user.firstName === firstname) {
//                 return user
//             }
//         })
//         res.send(fndUser)
//     }else {
//         res.send(users) 
//     }
     
// })

// app.get('/users/:userId', (req, res, next) => {
//     let userId = parseInt(req.params.userId)
    
//     let users = [
//         {
//             firstName: 'Rich',
//             lastName: 'Amofa',
//             age: 35
//         },
//         {
//             firstName: 'Aaron',
//             lastName: 'Cahill',
//             age: 45
//         }
//     ]
//     let fndUser = users.filter((user, index) => {
        
//         if(userId === index){
//             return user
//         }
//     })
//     if(fndUser.length){
//         res.send(fndUser)
//     } else {
//         res.send('Please user doesnt exist')
//     } 
// })

// app.get('/users/:userId/firstname', (req, res, next) => {
//     let userId = parseInt(req.params.userId)
    
//     let users = [
//         {
//             firstName: 'Rich',
//             lastName: 'Amofa',
//             age: 35
//         },
//         {
//             firstName: 'Aaron',
//             lastName: 'Cahill',
//             age: 45
//         }
//     ]
//     let fndUser = users.filter((user, index) => {
        
//         if(userId === index){
//             return user
//         }
//     })
//     if(fndUser.length){
//         res.send(fndUser[0].firstName)
//     } else {
//         res.send('Please user doesnt exist')
//     } 
// })

mongoose.connect("mongodb://localhost:27017/inventory",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((conn) => {
    if(conn){
        console.log('MongoDB connection established')
    }
}).catch((err) => {
    console.log(err)
})



app.listen(port, () => {
    console.log(`server is listening to port ${port}`)
})

