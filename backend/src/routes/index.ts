import { Application } from "express";
import deezeRoutes from "./deezer.routes";

export default (app: Application) => {
  app.get("/healthcheck", (_req, res) => res.send("smth is running"));
  app.use("/api/v1", deezeRoutes);
};
