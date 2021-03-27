import mongoose from 'mongoose';
import daySchema from './daySchema';

const Shelf = mongoose.model('Shelf', daySchema);

export default Shelf;
