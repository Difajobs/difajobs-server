import express, { Request, Response, NextFunction } from 'express';
import googleRouter from './v1/auth/google';

const rootRoute = express.Router()

rootRoute.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to Difa Jobs API",
        version: "1.0.0",
    })
})

rootRoute.use(function (err: any, req: Request, res: Response, next: NextFunction) {
    res.locals.message = err.message;
    res.status(err.status || 500);
    res.json({ success: false, message: err.message });
});

rootRoute.use('/', googleRouter)

export default rootRoute