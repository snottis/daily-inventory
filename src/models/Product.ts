import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gtin: { type: String, required: true },
  value: { type: String, required: true },
  lotsize: { type: Number, required: true },
  hidden: { type: Boolean, required: true, default: false },
});
