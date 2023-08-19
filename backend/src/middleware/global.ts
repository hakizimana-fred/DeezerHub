import compression from 'compression';
import cors from 'cors';
import { Application } from 'express';
import morgan from 'morgan';

export default (app: Application) => {
  app.use(cors());
  app.use(compression());
  app.use(morgan('dev'));
};
