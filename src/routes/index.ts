import koaRouter from '@koa/router';
import users from './users';
import login from './login';
import products from './products';

const router = new koaRouter({ prefix: '/api' });

router.use('/users', users.routes());
router.use('/login', login.routes());
router.use('/products', products.routes());

export default router;
