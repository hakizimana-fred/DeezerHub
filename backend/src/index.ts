import 'dotenv/config';
import express, { Application, NextFunction, Request, Response } from 'express';
import { NotFoundError } from './errors/errors';
import configMiddleware from './middleware/global';
import configRoutes from './routes/';

const app: Application = express();

const start = () => {
  configMiddleware(app);
  configRoutes(app);

  // Catch 404 and forward to error handler
  app.use(function (_req, _res, next) {
    const err = new NotFoundError('Not found');
    next(err);
  });

  app.use(function (
    err: any,
    _req: Request,
    res: Response,
    _next: NextFunction
  ) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: process.env.NODE_ENV !== 'production' ? err : {},
    });
  });

  app.listen(process.env.PORT, () =>
    console.log(`server is running on port ${process.env.PORT}`)
  );
};

void start();
