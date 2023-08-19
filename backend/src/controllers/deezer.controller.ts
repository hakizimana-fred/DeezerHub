import { Request, Response } from 'express';
import { deezerWrapper } from '../services/deezer.service';

/**
 * Controller functions for handling Deezer related actions.
 */
export const deezerCtrl = {
  /**
   * Search for tracks based on the provided track name.
   * @param req - The request object.
   * @param res - The response object.
   */
  async search(req: Request, res: Response) {
    const { track } = req.query;
    try {
      const processed_tracks = await deezerWrapper.search(track as string);

      return res.status(200).json({
        success: true,
        message: 'Successfully fetched tracks',
        tracks: processed_tracks,
      });
    } catch (e) {
      return res.status(400).json({
        success: false,
        message: 'Something went wrong',
        error: e.message,
      });
    }
  },

  /**
   * Search for an artist by their ID and fetch additional information.
   * @param req - The request object.
   * @param res - The response object.
   */

  async searchById(req: Request, res: Response) {
    const { artistId } = req.params;
    try {
      const artistData = await deezerWrapper.searchArtistById(Number(artistId));
      return res.status(200).json({
        message: 'Successfully featched artist info',
        artist: artistData,
      });
    } catch (e) {
      return res.status(400).json({
        success: false,
        message: 'Something went wrong',
        error: e.message,
      });
    }
  },
};
