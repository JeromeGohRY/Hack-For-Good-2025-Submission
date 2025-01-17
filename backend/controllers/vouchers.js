import express from "express"
import Voucher from "../models/voucher.js";
import User from "../models/user.js";

const router = express.Router();

//Get all vouchers
  router.get('/', async (req, res) => {
    try {
      const vouchers = await Voucher.find({});
      res.json(vouchers);
    } catch (err) {
      res.status(500).json({ error: 'Failed to retrieve vouchers' });
    }
  });
  
//Create a voucher
router.post('/',async(req,res)=>{
  const { name, description } = req.body;
  const newVoucher = new Voucher({
    name,
    description,
  });

  try {
    const savedVoucher = await newVoucher.save();
    res.status(201).json(savedVoucher);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create voucher' });
  }
})


// Assign a voucher to a user
router.post('/:id', async(req, res) => {
    const userId = req.params.id;
    const { voucherId } = req.body;
  
    const user = await User.findById(userId);
    const voucher = await Voucher.findById(voucherId);
  
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    if (!voucher) {
      return res.status(404).json({ error: "Voucher not found" });
    }
  
    const currentCount = user.vouchers.get(voucher.name) || 0; // Default to 0 if not found
    user.vouchers.set(voucher.name, currentCount + 1);
    await user.save();
  
    res.json({ message: "Voucher assigned successfully", user });
  });


  
// Delete a voucher
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedVoucher = await Voucher.findByIdAndDelete(id);
    if (!deletedVoucher) {
      return res.status(404).json({ error: 'Voucher not found' });
    }
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete voucher' });
  }
});


  export default router



