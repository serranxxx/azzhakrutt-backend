const { Schema, model } = require('mongoose')

const sacramentoSchema = Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
   
})


module.exports = model('Sacramento', sacramentoSchema)

