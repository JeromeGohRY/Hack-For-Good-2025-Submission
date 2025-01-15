import mongoose from "mongoose";

// Schema definition for Product
const voucherSchema = new mongoose.Schema({
    name: { 
      type: String, 
      required: true, 
      unique: true 
    },
    description: {
      type: String,
      required: true,
    },
    
  });
  
  // Add toJSON transformation for cleaning up the output
  voucherSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
    },
  });
  
  // Export the model
  export default mongoose.model('Voucher', voucherSchema);