import mongoose from 'mongoose';

// Schema definition for User
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String, //probably need hash this for security
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  vouchers: {
    type: Map,
    of: Number, // You can store the voucher count here, like {Tibit: 3, stationary: 2}
    default: {},
  },
  wishlist: {
    type: Map,
    of: Number, // A map of {product name: quantity}
    default: {},
  },
});


userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

// Export the model
export default mongoose.model('User', userSchema);
