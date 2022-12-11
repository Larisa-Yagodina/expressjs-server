import mongoose from 'mongoose';
const { Schema } = mongoose;

const statusSchema = new Schema({
  title:  {type: String, required: true},
  status: {type: String, required: true},
});

export default mongoose.model('Status', statusSchema);
