import mongoose from 'mongoose';
import validator from 'mongoose-unique-validator';

const inventorySchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  amount: { type: Number, default: 0, required: true },
});

const daySchema = new mongoose.Schema({
  date: { type: Date, required: true },
  location: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
  inventory: [inventorySchema],
});

daySchema.index({ date: 1, location: 1 }, { unique: true });

daySchema.set('toJSON', {
  transform: (document: any, returnedObject: any) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

daySchema.plugin(validator);

export default daySchema;
