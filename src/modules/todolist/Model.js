import mongoose from 'mongoose';
const { Schema } = mongoose;

const todolistSchema = new Schema({
  name:  {type: String, required: true},
  isDone: {type: Boolean, required: true},
});

export default mongoose.model('TodoList', todolistSchema);
