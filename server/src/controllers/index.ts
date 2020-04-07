import userRouter from './user';
import ordersRouter from './orders';

export default (router, db) => {
    router.use('/orders', ordersRouter(db));
    router.use('/', userRouter(db));
    
    return router;
};
