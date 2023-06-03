import mongoose from 'mongoose';
import app from './app';
require('dotenv').config(); // Configurar dotenv

// Configuración de MongoDB
const mongoURL: string | undefined = process.env.MONGO_URL;

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
    app.listen(process.env.PORT || 3001, () => {
      console.log(
        `Servidor Express en funcionamiento en el puerto ${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
  });
