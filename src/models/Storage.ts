import mongoose from 'mongoose';
import daySchema from './daySchema';

const Storage = mongoose.model('Storage', daySchema);

export default Storage;
