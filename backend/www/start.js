import chalk from 'chalk';
import config from '../config/config.js';
import connectDB from '../config/dbconfig.js';
import app from '../server.js';

let port = config.development.port;

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
