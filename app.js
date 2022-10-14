// ./app.js
const express = require('express')
const mountRoutes = require('./routes')
const app = express()
mountRoutes(app)
// ... more express setup stuff can follow