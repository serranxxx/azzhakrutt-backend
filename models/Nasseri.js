const { Schema, model } = require('mongoose')

const NasseriSchema = Schema({

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
        iniciadas: {
            type: Boolean,
            require: true
        },
        adiestradas: {
            type: Boolean,
            require: true
        },
        religiosas: {
            type: Boolean,
            require: true
        },
        cdj: {
            type: Boolean,
            require: true
        },
        lider_en: {
            type: Boolean,
            require: true
        },
        v_cristo: {
            type: Boolean,
            require: true
        }
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



module.exports = model('Nasseri', NasseriSchema)
