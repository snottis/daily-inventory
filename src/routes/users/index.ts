import koaRouter from '@koa/router';
import uc from '../../controllers/usersController';

const api = new koaRouter();

api.post('/', uc.createUser);
api.get('/', uc.getAll);
api.get('/:id', uc.getOne);
api.put('/:id', uc.updateUser);
api.delete('/:id', uc.deleteUser);

export default api;
