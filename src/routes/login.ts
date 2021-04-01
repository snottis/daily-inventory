import koaRouter from '@koa/router';
import ctrl from '../controllers/loginController';

const router = new koaRouter();
router.post('/', ctrl.login);

export default router;
