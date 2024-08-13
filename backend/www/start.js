import chalk from 'chalk';
import config from '../config/config.js';
import connectDB from '../config/dbconfig.js';
import app from '../server.js';

// let port = config.development.port;
const normalizePort = (val) => {
  let port = parseInt(val, 10);

  if (isNaN(val)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }
  return false;
};

const port = normalizePort(config.development.port);
app.set('port', port);

// Connect to database and start the server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(
      chalk.blue(
        `  Server started and running on port ${port}` +
          '\n       Press ctrl+C to terminate'
      )
    );
  });
});
