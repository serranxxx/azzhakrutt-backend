const { Schema, model } = require('mongoose')

const BiteSchema = Schema({

    name: {
        type: String,
        require: true,
        trim: true,
        // unique: true
    },
    
    DoB: {
        type: String,
        require: true, 
    },
    cursos: {
        discipulos: {
            type: Boolean,
            require: true
        },
        apostoles: {
            type: Boolean,
            require: true
        },
        profetas: {
            type: Boolean,
            require: true
        },
        cristeros: {
            type: Boolean,
            require: true
        },
      
    },
    Sacramentos: {
        bautizo: {
            type: Boolean,
            require: true
        },
        comunion: {
            type: Boolean,
            require: true
        },
        confirmacion: {
            type: Boolean,
            require: true
        }
    },
    Contacto: {
        numero: {
            type: Number,
            require: true,
            
        },
        emergencia: {
            type: String,
            require: true,
            trim: true
        },
        num_emergencia: {
            type: Number,
            require: true,
        } 
    },
    Active: {
        type: Boolean,
        require: true, 
    },


})



module.exports = model('Bite', BiteSchema)
