import userRouter from './user';
import ordersRouter from './orders';
import productsRouter from './products';

export default (router, db) => {
    router.use('/orders', ordersRouter(db));
    router.use('/products', productsRouter(db));
    router.use('/', userRouter(db));
    
    return router;
};
