import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

async function dbConnect() {
  await mongoose.connect('mongodb+srv://admin:backloop@cluster1.xyeasnb.mongodb.net/kanban');
}

//mongodb+srv://admin:<password>@cluster0.eq08xyg.mongodb.net/
dbConnect().then(res => console.log('CONNECTED'));
dbConnect().catch(err => console.log(err));


export default dbConnect;
