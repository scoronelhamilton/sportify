const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes/routes');
const connectToMongo = require('./db/index');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use('/', router);

// app.use(express.static(`${__dirname}/../client/dist`));

// Initialization
connectToMongo()
  .then(() => {
    app.listen(PORT, err => {
      if (err) {
        throw new Error(err);
      } else {
        console.log(`Server listening on port ${PORT}...`);
      }
    });
  })
  .catch(err => console.error(`ERROR: ${err.message}`));
