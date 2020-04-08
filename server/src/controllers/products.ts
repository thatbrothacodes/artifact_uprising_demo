import express from 'express';

export default (db) => {
    const router = express.Router();

    router.get('/', async(req, res, next) => {
        try {
            db.Product.findAll()
                .then(result => res.status(200).json(result))
                .catch(() => {
                    res.status(500).json({
                        error: 'Internal Sever Error'
                    });
                });
        } catch(e) {
            res.status(500).json({
                error: 'Internal Sever Error'
            });
            next(e);
        }
    });

    return router;
}