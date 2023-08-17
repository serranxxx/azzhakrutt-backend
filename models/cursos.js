const { Schema, model } = require('mongoose')


const cursoShcema = Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
    team: {
        type: String,
        require: true,
        trim: true,
    },
    value: {
        type: Number,
        require: true
    },
    active: {
        type: Boolean,
        require: true
    }
})


module.exports = model('Curso', cursoShcema)



