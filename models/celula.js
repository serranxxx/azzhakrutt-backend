const { Schema, model } = require('mongoose')


const celulaSchema = Schema({
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
    active: {
        type: Boolean,
        require: true
    }
})


module.exports = model('Celula', celulaSchema)



