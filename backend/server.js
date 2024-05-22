import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv'
dotenv.config();
import connectDb from './config/db.js';
// import productRoutes from './routes/productRoutes.js';

const port = process.env.PORT || 5000;

connectDb();//Mongo Connection
const app = express();


app.get('/', (req, res) => {
    res.send('API is running...');
});
// app.use('/api/products',productRoutes)
app.get('/', (req, res) => {
    res.json(products);
});

app.get('/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});


app.listen(port, () => console.log(`Server running on port ${port}`));