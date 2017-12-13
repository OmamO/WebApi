const express = require('express')
const bodyParser = require('body-parser')
const contactRouter = require('../contact/contact.js')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/',contactRouter)

module.exports = app