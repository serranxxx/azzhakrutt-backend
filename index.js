
const express = require('express')
const { dbConnection } = require('./database/config')
require('dotenv').config()
const cors = require('cors');

//Crear servidor de express
const app = express()
// DB
dbConnection()
// CORS
app.use(cors())
// directorio publico
app.use(express.static('public'))

//Lecutra y parseo del body
app.use(express.json())
// Rutas
app.use('/api/auth', require('./routes/routeAuth'))
app.use('/api/sher', require('./routes/routeSheratan'))
app.use('/api/nass', require('./routes/routeNasseri'))
app.use('/api/yaho', require('./routes/routeYahoska'))
app.use('/api/bite', require('./routes/routeBite'))
app.use('/api/celu', require('./routes/routeCelula'))
app.use('/api/curs', require('./routes/routeCursos'))

// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`servidor corriendo en puerto ${process.env.PORT}`)
})