import mongoose, { Schema, Document } from 'mongoose';

export interface ProductModel extends Document {
  name: string;
  price: number;
  description: string;
  stock: number;
  discount: number;
  images: [string];
  isActive: boolean;
}

const productSchema = new Schema<ProductModel>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  stock: { type: Number, required: true },
  discount: { type: Number, required: true },
  images: { type: [String] },
  isActive: { type: Boolean, default: true },
});

const Product = mongoose.model<ProductModel>('Product', productSchema);

export default Product;
