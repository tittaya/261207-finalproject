const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema( {
    name: { type: String, required: true, trim: true},
    email: { type: String, required: true, unique: true, lowercase: true},
    password: { type: String, required: true, minlength: 6},
    admin: { type: Boolean, default: false},
    created: { type: Date, required: true, default: Date.now},
    updated: { type: Date, required: true, default: Date.now}
}) 



const User = mongoose.model('User', userSchema)
module.exports = User