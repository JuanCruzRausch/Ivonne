import express from 'express';
import {
  createProduct,
  deleteProduct,
  desactivateProduct,
  getAllProductsController,
  getProduct,
  updateProduct,
} from '../controller/productController';

const router = express.Router();

// Ruta GET para obtener todos los productos
// Ruta POST para cargar un producto
router.route('/').get(getAllProductsController).post(createProduct);

// Ruta GET para obtener un producto
// Ruta PUT para actualizar un producto por su ID
// Ruta DELETE para eliminar un producto por su ID
router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct);

// Ruta PUT para desactivar un producto por su ID
router.put('/deactivate/:id', desactivateProduct);

// Ruta PUT para reactivar un producto por su ID
router.put('/activate/:id');

export default router;
