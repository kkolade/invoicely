// Node core modules

// Express
import express from 'express';

// Dependencies modules
import bodyParser from 'body-parser';
import cors from 'cors';
import layouts from 'express-ejs-layouts';
import logger from 'morgan';

// Other imports
import cfg from './config/config.js';

// import routes

import {
  respondNoResourceFound,
  respondServerError,
} from './middlewares/errorMiddleware.js';

const app = express();

// Static Files
app.use(express.static(cfg.development.dir.static));
console.log(cfg.development.dir.static);

// Setup view engine
app.set('views', cfg.development.dir.views);
app.use(layouts);
app.set('layout', './layouts/layout');
app.set('view engine', 'ejs');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));

// Routes

// Error Handler
app.use(respondNoResourceFound);
app.use(respondServerError);

export default app;
