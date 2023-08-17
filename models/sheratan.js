const { Schema, model } = require('mongoose')

const ItemSchema = Schema({

    id: {
        type: String,
        require: true,
        trim: true,
        // unique: true
    },
    name: {
        type: String,
        require: true, 
        trim: true
    },
    productPrice: {
        type: Number,
        require: true, 
    },
    porcentage: {
        type: Number,
        require: true, 
    },
    profit: {
        type: Number,
        require: true, 
    },
    customerPrice: {
        type: Number,
        require: true, 
    },
    unity: {
        type: String,
        require: true, 
        trim: true
    },
    minAmount: {
        type: Number,
        require: true, 
    },
    amount: {
        type: Number,
        require: true, 
    },
    purchaseCosto: {
        type: Number,
        require: true, 
    },
    state: {
        type: Boolean,
        require: true, 
    }

})

const SheratanSchema = Schema({

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
        precurso: {
            type: Boolean,
            require: true
        },
        iniciados: {
            type: Boolean,
            require: true
        },
        avanzados: {
            type: Boolean,
            require: true
        },
        capitanes: {
            type: Boolean,
            require: true
        },
        ccc: {
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



module.exports = model('Sheratan', SheratanSchema)
