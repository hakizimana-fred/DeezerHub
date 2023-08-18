import express from "express";
import "dotenv/config";

const app = express();

const start = () => {
  app.get("/healthcheck", (_req, res) => res.send("smth is running"));

  app.listen(process.env.PORT, () =>
    console.log(`server is running on port ${process.env.PORT}`)
  );
};

void start();
