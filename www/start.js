import config from '../app/config/config.js';
import connectDB from '../app/config/database.js';
import app from '../app/server.js';

let port = config.development.port;

// Connect to database and start the server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(
      `Server started and running on port ${port}` +
        '\nPress ctrl+C to terminate'
    );
  });
});
