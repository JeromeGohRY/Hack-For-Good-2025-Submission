import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import productsRouter from './controllers/products.js';
import usersRouter from './controllers/users.js';
import vouchersRouter from './controllers/vouchers.js'


const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/products', productsRouter);
app.use('/api/users', usersRouter);
app.use('/api/vouchers', vouchersRouter);

// mongoose.connect(config.MONGODB_URI)
//   .then(() => {
//     logger.info('connected to MongoDB')
//   })
//   .catch((error) => {
//     logger.error('error connecting to MongoDB:', error.message)
//   })


export default app;
