const mongoose = require('mongoose');

// Schema for User
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
    },
    jobTitle: {
        type: String,
    }
},
{ timestamps: true }
);

// Model for User
const User = mongoose.model("user", userSchema);

module.exports = User;