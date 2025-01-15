import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv'; 

import productsRouter from './controllers/products.js';
import usersRouter from './controllers/users.js';
import vouchersRouter from './controllers/vouchers.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('dist'))

app.use('/api/products', productsRouter);
app.use('/api/users', usersRouter);
app.use('/api/vouchers', vouchersRouter);


mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })


export default app;
