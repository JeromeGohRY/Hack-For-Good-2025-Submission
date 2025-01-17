import express from "express"
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

import User from '../models/user.js'

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // Exclude passwords for security
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
});

// Create a new user
router.post("/", async (req, res) => {
  const { username, password, role } = req.body;
  try {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword, role });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
});

// Login user
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ message: "Invalid credentials" });
    const token = jwt.sign({ role: user.role },  // Include role in the JWT payload
                            process.env.JWT_SECRET_KEY,
                            { expiresIn: '1h' }
                          );
      res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
});



export default router
