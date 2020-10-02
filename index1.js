let express = require('express');
let bodyParser = require('body-parser')
let cors = require('cors');
let mongoose = require('mongoose');
let app = express();
let port = 4001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/users', require('./routes/users'))
app.use('/auth', require('./routes/auth'))



// connection to mongodb
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