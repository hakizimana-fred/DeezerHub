import express from "express";
import "dotenv/config";
import axios from "axios";

const app = express();

const start = () => {
  app.get("/healthcheck", (_req, res) => res.send("smth is running"));

  app.get("/api/v1/search", async (req, res) => {
    const { track } = req.query;
    try {
      const { data } = await axios.get(
        `https://api.deezer.com/search?q=${track}`
      );

      return res
        .status(200)
        .json({ message: "successfully fetched trackes", tracks: data });
    } catch (e) {
      return res
        .status(400)
        .json({ message: "Something went wrong", error: e.message });
    }
  });

  app.listen(process.env.PORT, () =>
    console.log(`server is running on port ${process.env.PORT}`)
  );
};

void start();
