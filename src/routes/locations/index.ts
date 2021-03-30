import koaRouter from '@koa/router';
import lc from '../../controllers/locationsController';

const api = new koaRouter();

api.post('/', lc.create);
api.get('/', lc.getAll);
api.put('/:id', lc.update);
api.delete('/:id', lc.remove);

export default api;
