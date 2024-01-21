import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

async function dbConnect() {
  await mongoose.connect('mongodb+srv://admin:12345@cluster0.eq08xyg.mongodb.net/kanban');
}

dbConnect().then(res => console.log("CONNECTED"));
dbConnect().catch(err => console.log(err));


export default dbConnect;