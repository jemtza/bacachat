import { connect } from 'mongoose';

let mongoURI = 'mongodb://mongo:27017/bacadb';
// let mongoURI = 'mongodb://localhost:27017/bacadb';

const connectDatabase = async () => {
  try {
    await connect(mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log('Database connected 🦇');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDatabase;
