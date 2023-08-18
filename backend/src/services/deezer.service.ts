import axios from "axios";
import { BASE_URL } from "../constants";
import { processedTracks } from "../helpers";
class Deezer {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async search(track: string) {
    try {
      const {
        data: { data },
      } = await axios.get(`${BASE_URL}/search?q=${track}`);
      const tracks = data || [];

      const processed = processedTracks(tracks);

      return processed;
    } catch (e) {
      throw new Error("Something went wrong while searching for tracks.");
    }
  }
}

export const deezerWrapper = new Deezer(`${BASE_URL}`);
