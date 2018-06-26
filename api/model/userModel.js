const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    fathersName: {
        type: String,
        required: true
    },
    mothersName: {
        type: String,
        required: true
    },
    dateOfbirth: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }

});

const User = mongoose.model('User', userSchema);

module.exports = User;