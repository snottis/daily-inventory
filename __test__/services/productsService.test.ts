const memserver = require('../memoryServer');
import Product from '../../src/models/Product';
import productsService from '../../src/services/productsService';
import * as types from '../../src/types/productTypes';

describe('Products service', () => {
  const mockProduct = {
    name: 'Prod',
    gtin: '1234',
    value: 2,
    lotsize: 10,
  } as types.ProductCreate;
  beforeAll(async () => {
    await memserver.connect();
  });
  afterAll(async () => {
    await memserver.disconnect();
  });
  beforeEach(async () => {
    await Product.deleteMany({});
  });

  describe('Create product', () => {
    it('Should create product', async () => {
      await productsService.create(mockProduct);
      expect(await Product.countDocuments()).toEqual(1);
    });
    it('Should not be hidden', async () => {
      const prod = await productsService.create(mockProduct);
      expect(prod.hidden).toEqual(false);
    });

    it('Should be hidden', async () => {
      const newProd = { ...mockProduct };
      newProd.hidden = true;
      const prod = await productsService.create(newProd);
      expect(prod.hidden).toEqual(true);
    });
  });
  describe('Get all', () => {
    it('Should have 1 product', async () => {
      await new Product({ ...mockProduct, hidden: false }).save();
      const prods = await productsService.getAll();
      expect(prods.length).toEqual(1);
    });
    it('Should have 0 products', async () => {
      const prods = await productsService.getAll();
      expect(prods.length).toEqual(0);
    });
  });

  describe('Remove', () => {
    it('Should remove', async () => {
      const prod = await new Product({ ...mockProduct, hidden: false }).save();
      await productsService.remove(prod._id);
      expect(await Product.countDocuments()).toEqual(0);
    });
  });

  describe('Update', () => {
    it('Should update name', async () => {
      const prod = await new Product({ ...mockProduct, hidden: false }).save();
      await productsService.update(prod._id, { name: 'new' });
      const up = (await Product.findById(prod._id)) as any;
      expect(up.name).toEqual('new');
    });
  });
});
