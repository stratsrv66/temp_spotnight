import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  password: String,
  score: Number,
  events: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event'
  }]
})