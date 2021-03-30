import koaRouter from '@koa/router';
import users from './users';
import login from './login';
import products from './products';
import locations from './locations';

const router = new koaRouter({ prefix: '/api' });

router.use('/users', users.routes());
router.use('/login', login.routes());
router.use('/products', products.routes());
router.use('/locations', locations.routes());

export default router;
