const express = require('express')


const expressConfugurator = require('./config/expressConfiguration')
const handlebarsConfigurator = require('./config/handlebarsConfiguration')
const homeController = require('./controllers/homeController')
const cubeController = require('./controllers/cubeController')

const app = express()
const PORT = 5000

expressConfugurator(app)
handlebarsConfigurator(app)

app.use(homeController)
app.use('/cubes', cubeController)


app.listen(PORT, () => console.log(`server is listening on port ${PORT}...`))