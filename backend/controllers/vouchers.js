import express from "express"
import Voucher from "../models/voucher.js";

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


//No integration yet
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



