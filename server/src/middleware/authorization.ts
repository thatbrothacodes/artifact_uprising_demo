export default (req, res, next) => {
    res.status(401);
    res.status(500).json({
        error: 'Internal Sever Error'
    });
};