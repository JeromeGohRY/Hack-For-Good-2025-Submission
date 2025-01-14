import express from "express"
const router = express.Router();

// Dummy data for users and vouchers
const users = [
  { id: 1, name: "John Doe", email: "john@example.com", vouchers: [] },
  { id: 2, name: "Jane Smith", email: "jane@example.com", vouchers: [] },
];


// Get all users
router.get('/', (req, res) => {
  res.json(users);
});

// Create a new user
router.post('/', (req, res) => {
  const { name, email } = req.body;
  const newUser = {
    id: users.length + 1,
    name,
    email,
    vouchers: [],
  };
  users.push(newUser);
  res.status(201).json(newUser);
});



export default router
