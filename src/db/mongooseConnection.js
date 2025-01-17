const mongoose = require('mongoose');

const MONGO_URI = "mongodb://localhost:27017/mydb";


mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

