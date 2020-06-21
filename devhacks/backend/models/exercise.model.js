const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const excerciseSchema = new Schema({
    userName: { type: String, require: true},
    description: { type: String, require: true},
    duration: { type: Number, require: true},
    date: { type: Date, require: true}

}, {
    timestamps: true,

});

const Exercise = mongoose.model('Exercise', exerciseSchema);

model.exports = Exercise;
