import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gtin: { type: String, required: true },
  value: { type: Number, required: true },
  lotsize: { type: Number, required: true },
  hidden: { type: Boolean, required: true, default: false },
});

productSchema.set('toJSON', {
  transform: (document: any, returnedObject: any) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Product = mongoose.model('Product', productSchema);
export default Product;
