import { Request, Response } from 'express';
import { Document } from 'mongoose';
import Product, { ProductModel } from '../models/productModel';

export const getAllProductsController = async (req: Request, res: Response) => {
  try {
    const products: Document<ProductModel>[] = await Product.find();

    res.status(200).json({
      status: 'success',
      results: products.length,
      data: { products },
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Ha ocurrido un error al obtener los productos.' });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;

    const product: Document<ProductModel>[] = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: 'No se encontró el producto.' });
    }

    res.status(200).json(product);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Ha ocurrido un error al obtener los productos.' });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, description, stock, discount } = req.body;

    const newProduct = new Product({
      name,
      price,
      description,
      stock,
      discount,
    });

    const savedProduct = await newProduct.save();
    console.log(savedProduct);

    res.status(201).json(savedProduct);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Ha ocurrido un error al crear el producto.' });
  }
};

export const desactivateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;

    const deletedProduct: Document<ProductModel> | null =
      await Product.findByIdAndUpdate(
        productId,
        { isActive: false },
        {
          new: true,
        }
      );

    if (!deletedProduct) {
      return res.status(404).json({ error: 'No se encontró el producto.' });
    }

    res.status(200).json(deletedProduct);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Ha ocurrido un error al eliminar el producto.' });
  }
};

export const activateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;

    const deletedProduct: Document<ProductModel> | null =
      await Product.findByIdAndUpdate(
        productId,
        { isActive: true },
        {
          new: true,
        }
      );

    if (!deletedProduct) {
      return res.status(404).json({ error: 'No se encontró el producto.' });
    }

    res.status(200).json(deletedProduct);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Ha ocurrido un error al eliminar el producto.' });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const updatedProductData = req.body;

    const updatedProduct: Document<ProductModel> | null =
      await Product.findByIdAndUpdate(productId, updatedProductData, {
        new: true,
      });

    if (!updatedProduct) {
      return res.status(404).json({ error: 'No se encontró el producto.' });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Ha ocurrido un error al actualizar el producto.' });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const deletedProduct: Document<ProductModel> | null =
      await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ error: 'No se encontró el producto.' });
    }

    res.status(200).json(deletedProduct);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Ha ocurrido un error al eliminar el producto.' });
  }
};
