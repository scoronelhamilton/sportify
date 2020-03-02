const mongoose = require('mongoose');
const host = process.env.MONGODB_URI || 'mongodb://localhost/sportify';

module.exports = () =>
  mongoose
    .connect(host, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => {
      throw new Error(err);
    });
