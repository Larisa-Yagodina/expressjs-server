import mongoose from 'mongoose';
const { Schema } = mongoose;

const serviceSchema = new Schema({
  job:  {type: String, required: true},
  price: {type: Number, required: true},
  primeCost:   {type: Number, required: true},
  employee: {type: String, required: true},
});

export default mongoose.model('Service', serviceSchema);
