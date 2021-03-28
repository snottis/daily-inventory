import koaRouter from '@koa/router';
import users from './users';

const router = new koaRouter({ prefix: '/api' });

router.use('/users', users.routes());

export default router;
