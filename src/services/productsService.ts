import Product from '../models/Product';
import { NotFoundError } from '../utils/errors';
import * as types from '../types/productTypes';

const create = async (product: types.ProductCreate): Promise<any> => {
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

const update = async (
  id: string,
  product: types.ProductUpdate,
): Promise<any> => {
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
