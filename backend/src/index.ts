import express, { Application } from "express";
import "dotenv/config";
import configRoutes from "./routes/";
import configMiddleware from "./middleware/global";

const app: Application = express();

const start = () => {
  configMiddleware(app);
  configRoutes(app);

  app.listen(process.env.PORT, () =>
    console.log(`server is running on port ${process.env.PORT}`)
  );
};

void start();
