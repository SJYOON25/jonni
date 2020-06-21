const mongoose = require('mongoose');

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    }

}, {
    timestamps: true,

});

const User = mongoose.model('User', userSchema);

model.exports = User;
