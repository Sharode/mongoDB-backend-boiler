const mongoose = require('mongoose')
const { Schema } = mongoose

const modelSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
        timestamps: true,
    });

const Model1 = mongoose.model('Model1', modelSchema)

module.exports = Model1