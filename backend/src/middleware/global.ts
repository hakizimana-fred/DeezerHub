import { Application } from "express";
import cors from "cors";
import compression from "compression";

export default (app: Application) => {
  app.use(cors());
  app.use(compression());
};
