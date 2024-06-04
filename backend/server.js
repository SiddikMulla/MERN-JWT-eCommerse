import express from 'express';
import dotenv from 'dotenv'
dotenv.config();
import connectDb from './config/db.js';
const port = process.env.PORT || 5000;
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

connectDb();//Mongo Connection
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productRoutes)

app.use('/api/users', userRoutes)


app.get('/', (req, res) => {
    res.send('API is running...');
});
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));