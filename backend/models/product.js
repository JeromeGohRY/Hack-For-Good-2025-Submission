import mongoose from 'mongoose';

// Schema definition for Product
const productSchema = new mongoose.Schema({
  id: { 
    type: String, 
    required: true, 
    unique: true 
  },
  quantity: {
    type: Number,
    required: true,
  },
  cost: {
    type: String,
    required: true,
  },
  
});

// Add toJSON transformation for cleaning up the output
productSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

// Export the model
export default mongoose.model('Product', productSchema);
