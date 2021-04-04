import Product from '../models/Product';
import { NotFoundError } from '../utils/errors';

interface ProductCreate {
  name: string;
  gtin: string;
  value: number;
  lotsize: number;
  hidden?: boolean;
}

interface ProductUpdate {
  name?: string;
  gtin?: string;
  value?: number;
  lotsize?: number;
  hidden?: boolean;
}

const create = async (product: ProductCreate): Promise<any> => {
  const newProduct = new Product(product);
  await newProduct.save();
  return newProduct;
};

const getAll = async (): Promise<any> => {
  const products = Product.find({});
  return products;
};

const remove = async (id: string): Promise<any> => {
  const product = await Product.findById(id);
  if (!product) throw new NotFoundError(`id: ${id} not found`);
  await product.remove();
  return product;
};

const update = async (id: string, product: ProductUpdate): Promise<any> => {
  console.log('UPDATE', { ...product });
  const upProduct = await Product.findByIdAndUpdate(
    id,
    { $set: { ...product } },
    { new: true },
  );
  if (!upProduct) throw new NotFoundError(`id: ${id} not found`);
  return upProduct;
};

export default { create, getAll, remove, update };
