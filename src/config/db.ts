import mongoose from 'mongoose';
import config from '../utils/config';
console.log(config.MongodbUri);
mongoose
  .connect(config.MongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('Mongo running!'));
