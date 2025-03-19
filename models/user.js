const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: (value) => {
                const result = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
                return result.test(value);
            },
            message: 'Please enter a valid email'
        }
    },
    document: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;