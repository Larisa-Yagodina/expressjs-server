import mongoose from 'mongoose';
const { Schema } = mongoose;

const statusSchema = new Schema({
  status:  {type: String, required: true},
  title: {type: String, required: true},
});

export default mongoose.model('Status', statusSchema);
