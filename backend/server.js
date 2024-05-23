import express from 'express';
import dotenv from 'dotenv'
dotenv.config();
import connectDb from './config/db.js';
const port = process.env.PORT || 5000;
import productRoutes from './routes/productRoutes.js'

connectDb();//Mongo Connection
const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/products', productRoutes)

app.listen(port, () => console.log(`Server running on port ${port}`));