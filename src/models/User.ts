import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  locations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Location' }],
  role: { type: String, enum: ['admin', 'user'] },
});

userSchema.set('toJSON', {
  transform: (document: any, returnedObject: any) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const User = mongoose.model('User', userSchema);
export default User;
