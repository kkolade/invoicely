// Node core modules

// Express
import express from 'express'

// Dependencies modules
import bodyParser from 'body-parser'
import cors from 'cors'
import expressLayouts from 'express-ejs-layouts'
import logger from 'morgan'

// Other imports
import cfg from './config/config.js'

// import routes

// Import error handlers
import { respondNoResourceFound, respondServerError } from './middlewares/errorMiddleware.js'

const app = express()

// Static Files
app.use(express.static(cfg.development.dir.static))

// Setup view engine and layout
app.set('views', cfg.development.dir.views)
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.set('layout', './layouts/layout')

// Middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'))

// Routes

// Error Handler
app.use(respondNoResourceFound)
app.use(respondServerError)

export default app
