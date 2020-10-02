let mongoose = require('mongoose')

let Schema = mongoose.Schema;

let UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
});

let UserModel = mongoose.model('Users', UserSchema);

module.exports = UserModel;