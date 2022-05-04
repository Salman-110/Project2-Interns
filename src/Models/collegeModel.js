const mongoose = require('mongoose');


const colegeSchema = new mongoose.Schema(
{
    name: {
        type: String,
        unique: true,
        required: true
    },

    fullName: {
        type: String,
        required: true
    },
    logoLink: {
        type: String,
        required: true
    },

    isDeleted: {
        type: Boolean,
        default: false
    }

})

module.exports = mongoose.model('College', colegeSchema);