import { Request, Response } from "express";
import { deezerWrapper } from "../services/deezer.service";

export const deezerCtrl = {
  async search(req: Request, res: Response) {
    const { track } = req.query;
    try {
      const processed_tracks = await deezerWrapper.search(track as string);

      return res.status(200).json({
        message: "Successfully fetched tracks",
        tracks: processed_tracks,
      });
    } catch (e) {
      return res
        .status(400)
        .json({ message: "Something went wrong", error: e.message });
    }
  },
};
