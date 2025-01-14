import express from "express"
const router = express.Router();

const vouchers = [
    { id: 1, code: "DISCOUNT10", description: "10% off", status: "active" },
    { id: 2, code: "FREESHIP", description: "Free Shipping", status: "active" },
  ];
  

// Get all vouchers
router.get('/', (req, res) => {
    res.json(vouchers);
  });
  
  // Assign a voucher to a user
  router.post('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const { voucherId } = req.body;
  
    const user = users.find((u) => u.id === userId);
    const voucher = vouchers.find((v) => v.id === voucherId);
  
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    if (!voucher) {
      return res.status(404).json({ error: "Voucher not found" });
    }
    if (voucher.status !== "active") {
      return res.status(400).json({ error: "Voucher is not active" });
    }
  
    user.vouchers.push(voucher);
    voucher.status = "assigned";
  
    res.json({ message: "Voucher assigned successfully", user });
  });
  
  export default router

// //Using MongoDB
// import express from 'express';
// import Product from '../models/product'; // Import the Product model
// const router = express.Router();

// // Get all products
// router.get('/', async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.json(products);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to retrieve products' });
//   }
// });

// // Create a new product
// router.post('/', async (req, res) => {
//   const { name, stock, price } = req.body;

//   const newProduct = new Product({
//     name,
//     stock,
//     price,
//   });

//   try {
//     const savedProduct = await newProduct.save();
//     res.status(201).json(savedProduct);
//   } catch (err) {
//     res.status(400).json({ error: 'Failed to create product' });
//   }
// });

// // Update a product
// router.put('/:id', async (req, res) => {
//   const { id } = req.params;
//   const { name, stock, price } = req.body;

//   try {
//     const updatedProduct = await Product.findByIdAndUpdate(
//       id,
//       { name, stock, price },
//       { new: true } // Return the updated product
//     );
//     if (!updatedProduct) {
//       return res.status(404).json({ error: 'Product not found' });
//     }
//     res.json(updatedProduct);
//   } catch (err) {
//     res.status(400).json({ error: 'Failed to update product' });
//   }
// });

// // Delete a product
// router.delete('/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     const deletedProduct = await Product.findByIdAndDelete(id);
//     if (!deletedProduct) {
//       return res.status(404).json({ error: 'Product not found' });
//     }
//     res.status(204).end();
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to delete product' });
//   }
// });

// export default router;
