import express from 'express';
import productRouter from './routes/productRouter';
import morgan from 'morgan';

require('dotenv').config(); // Configurar dotenv

const app = express();

app.use(morgan('dev'));
app.use(express.json());

// Configuración de Express
app.use('/products', productRouter);

export default app;
