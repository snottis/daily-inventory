import koaRouter from '@koa/router';
import users from './users';
import login from './login';

const router = new koaRouter({ prefix: '/api' });

router.use('/users', users.routes());
router.use('/login', login.routes());

export default router;
