const mongoose = require('mongoose');
const validator = require('validator');
// for validation we are using validator npm package 
// In Mongoose, data synchronization means keeping your data consistent and valid by using the schema to enforce rules before saving or retrieving data from MongoDB. This ensures that the documents in your database match the expectations defined in your code.
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minLength: 4,
        maxLength: 10
    },
    lastName: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email");
            }
        }
    },
    gender: {
        type: String,
        trim: true,
        validate: {
            validator: function (value) {
                if (!["male", "female", "others"].includes(value)) {
                    throw new Error("Invalid gender");
                }
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isStrongPassword(value)) {
                throw new Error("Enter a strong password");
            }
        }
    },
    age: {
        type: Number,
        min: 16,
        max: 60
    },
    mobileNumber: {
        type: String, 
        required: true,
        unique : true,
        validate: {
            validator: function (value) {
                return /^[6-9]\d{9}$/.test(value);
            },
            message: "Invalid mobile number"
        }
    }
}, { timestamps: true })

const User = mongoose.model('User', userSchema);

module.exports = { User };