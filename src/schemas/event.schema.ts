import mongoose from 'mongoose';

export const EventSchema = new mongoose.Schema({
  name: String,
  address: String,
  style: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Style'
  }],
  phone: String,
  description: String,
  comments: [String],

})