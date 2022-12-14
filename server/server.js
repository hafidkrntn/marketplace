import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import seedRouter from './routes/seedRoutes.js';
import CategoryRouter from './routes/categoryRoutes.js';
import ProductRouter from './routes/productRoutes.js';
import UserRouter from './routes/userRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//router
app.use('/api/seed/', seedRouter);
app.use('/api/category/', CategoryRouter);
app.use('/api/products/', ProductRouter);
app.use('/api/users/', UserRouter);


//Connect with DB
dotenv.config();
mongoose.connect(process.env.MONGODB_URI).then(() =>{
    console.log("Connected to DB");
}).catch((error) => {
    console.log(error.message);
});

//Create port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at: http://localhost:${port}`);
});