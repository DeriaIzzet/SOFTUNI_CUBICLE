const express = require('express')

const expressConfugurator = require('./config/expressConfiguration')
const handlebarsConfigurator = require('./config/handlebarsConfiguration')
const dbConnect = require('./config/dbConfig')
const routes = require('./routes')


const app = express() 
const PORT = 5000
dbConnect()
.then (() => console.log('DB succesfuly conected'))
.catch(err =>  console.log('DB error',err))

 expressConfugurator(app)
 handlebarsConfigurator(app)
 
app.use(routes)
app.listen(PORT, () => console.log(`server is listening on port ${PORT}...`))