import mongoose from 'mongoose';

const {Schema} = mongoose;

const orderSchema = new Schema({
  orderNumber: {type: Number, required: true},
  clientName: {type: String, required: true},
  service: {
    job: {type: String, required: true},
    employee: {type: String, required: true},
    price: {type: Number, required: true},
    primeCost: {type: Number, required: true},
    createAt: {type: String, required: true},
  },
  sentToDo: {
    date: {type: String, required: false},
    status: {type: Boolean, required: false}
  },
  completed: {
    date: {type: String, required: false},
    status: {type: Boolean, required: false}
  },
  sayToClient: {
    date: {type: String, required: false},
    status: {type: Boolean, required: false}
  },
  clientReceived: {
    date: {type: String, required: false},
    status: {type: Boolean, required: false}
  },
  paid: {
    payment: {type: Number, required: false},
    debt: {type: Number, required: false},
    primeCost: {type: Number, required: false},
    date: {type: String, required: false},
    status: {type: Boolean, required: false}
  }
});

export default mongoose.model('Order', orderSchema);
