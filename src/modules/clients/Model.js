import mongoose from 'mongoose';
const { Schema } = mongoose;

const clientSchema = new Schema({
  name:  {type: String, required: true},
  address: {type: String, required: true},
  phoneNumber:   {type: String, required: true},
  createAt: {type: String, required: true},
});

export default mongoose.model('Client', clientSchema);
