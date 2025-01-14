import express from 'express'
const router = express.Router();

// Dummy data for products
const products = [
  { id: 1, name: "Product A", stock: 100, price: 50 },
  { id: 2, name: "Product B", stock: 200, price: 30 },
];

// Get all products
router.get('/', (req, res) => {
  res.json(products);
});

// Create a new product
router.post('/', (req, res) => {
  const { name, stock, price } = req.body;
  const newProduct = {
    id: products.length + 1,
    name,
    stock,
    price,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Update a product
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  const { name, stock, price } = req.body;
  product.name = name || product.name;
  product.stock = stock || product.stock;
  product.price = price || product.price;

  res.json(product);
});

// Delete a product
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Product not found" });
  }

  products.splice(index, 1);
  res.status(204).end();
});

export default router
