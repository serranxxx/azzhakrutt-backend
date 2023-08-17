const { Schema, model } = require('mongoose')

const YahoskaSchema = Schema({

    name: {
        type: String,
        require: true,
        trim: true,
        // unique: true
    },
    celula: {
        type: String,
        require: true, 
        trim: true
    },
    DoB: {
        type: String,
        require: true, 
    },
    cursos: {
        iniciados: {
            type: Boolean,
            require: true
        },
        soldados: {
            type: Boolean,
            require: true
        },
        caballeros: {
            type: Boolean,
            require: true
        },
        llamados: {
            type: Boolean,
            require: true
        },
        cdj: {
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



module.exports = model('Yahoska', YahoskaSchema)
