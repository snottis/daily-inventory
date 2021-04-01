import koaRouter from '@koa/router';
import pc from '../../controllers/productsController';

const api = new koaRouter();

api.post('/', pc.create);
api.get('/', pc.getAll);
api.put('/:id', pc.update);
api.delete('/:id', pc.remove);

export default api;
