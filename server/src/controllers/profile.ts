import express from 'express';

export default () => {
    const router = express.Router();

    router.get('/', async(req, res, next) => {
        try {
            res.status(200).json([]);
        } catch(e) {
            res.status(500).json({
                error: 'Internal Sever Error'
            });
            next(e);
        }
    });

    return router;
}