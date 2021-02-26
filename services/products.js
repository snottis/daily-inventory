const model = require("../models/products-model");

exports.createProduct = async (gtin, name, value, lotsize, hidden) => {
  const r = await model.createProduct(gtin, name, value, lotsize, hidden);
  return r;
};

exports.getAllProducts = async () => {
  const r = await model.getAllProducts();
  return r;
};

exports.deleteProduct = async (gtin) => {
  const r = await model.deleteProduct(gtin);
  return r;
};

exports.updateProduct = async (gtin, name, value, lotsize, hidden) => {
  const r = await model.updateProduct(gtin, name, value, lotsize, hidden);
  return r;
};
