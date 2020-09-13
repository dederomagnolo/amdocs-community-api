const mongoose = require('../../database');

const RegisterSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    clothSize: {
        type: String,
        required: true
    },
    shoesSize: {
        type: String,
        required: true
    },
    adoptable: {
        type: Boolean,
        default: false
    }
});

const Register = mongoose.model('Register', RegisterSchema);

module.exports = Register;