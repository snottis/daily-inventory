const service = require("../services/products");

const validator = require("./products.validation");

exports.createProduct = async (ctx) => {
  await validator.product.validateAsync(ctx.request.body);
  const { gtin, name, value, lotsize, hidden } = ctx.request.body;
  const r = await service.createProduct(gtin, name, value, lotsize, hidden);
  ctx.body = r;
};

exports.getProducts = async (ctx) => {
  const r = await service.getAllProducts();
  ctx.body = r;
};

exports.updateProduct = async (ctx) => {
  await validator.product.validateAsync(ctx.request.body);
  const { gtin, name, value, lotsize, hidden } = ctx.request.body;
  const r = await service.updateProduct(gtin, name, value, lotsize, hidden);
  ctx.body = r;
};

exports.deleteProduct = async (ctx) => {
  await validator.gtin.validateAsync(ctx.request.body);
  const { gtin } = ctx.request.body;
  const r = await service.deleteProduct(gtin);
  ctx.body = r;
};
