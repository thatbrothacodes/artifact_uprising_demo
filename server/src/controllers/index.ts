import profileRouter from './profile';
import ordersRouter from './orders';

export default (router) => {
    router.use('/orders', ordersRouter());
    router.use('/', profileRouter());
    
    return router;
};
