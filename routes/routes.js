const express = require('express')
const router = express.Router()
const functions = require('../controller/index')

let routes = (app) =>
{
    router.post('/register',functions.registration)
    router.post('/getdata',functions.getdata)
    router.put('/update',functions.updatedetails)
    app.use('/api',router)
}
module.exports = 
routes