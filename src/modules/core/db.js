import mongoose from 'mongoose';
import logger from './logger';

// function dbConnect(uri, callback){
//   mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
// }

mongoose.set('strictQuery', false);

async function dbConnect() {
  // cloud db

  await mongoose.connect('mongodb+srv://admin:12345@cluster0.eq08xyg.mongodb.net/kanban');
  // local db
  //await mongoose.connect('mongodb://localhost:27017/kanban');


  // или это
 //  const db = mongoose.connection;
 // db.on('error', console.error.bind(console, 'connection error'));
 // db.once('open', () => {
 //   console.log("CONNECTED");
 // })
}
// или это
dbConnect().then(res => console.log("CONNECTED"));
dbConnect().catch(err => console.log(err));


export default dbConnect;