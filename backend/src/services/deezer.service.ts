import axios from 'axios';
import moment from 'moment';
import { BASE_URL } from '../constants';
import { processedTracks } from '../helpers';

/**
 * Class representing the Deezer API wrapper.
 */
class Deezer {
  baseUrl: string;

  /**
   * Create a Deezer instance with the specified base URL.
   * @param baseUrl - The base URL of the Deezer API.
   */
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  /**
   * Search for tracks based on the provided track name.
   * @param track - The track name to search for.
   * @returns Processed track data.
   * @throws Error if something goes wrong during the search.
   */
  async search(track: string) {
    try {
      const {
        data: { data },
      } = await axios.get(`${this.baseUrl}/search?q=${track}`);
      const tracks = data || [];

      const processed = processedTracks(tracks);

      return processed;
    } catch (e) {
      throw new Error('Something went wrong while searching for tracks ' + e);
    }
  }

  /**
   * Search for an artist by their ID and fetch additional information.
   * @param artistId - The ID of the artist to search for.
   * @returns Artist information including top tracks with albums.
   * @throws Error if something goes wrong during the search.
   */
  async searchArtistById(artistId: number) {
    try {
      const { artistInfo, topTracks, albums } = await this.fetchArtistData(
        Number(artistId)
      );
      const topTracksWithAlbums = topTracks.map((track: any) => {
        const album = albums.find((album: any) => album.id === track.album.id);
        return {
          ...track,
          album: album ? album.title : 'No available album for this track',
          releaseYear: album ? moment(album.release_date).format('YYYY') : '',
        };
      });

      return {
        name: artistInfo.name,
        fans: artistInfo.nb_fan,
        topTracksWithAlbums,
      };
    } catch (e) {
      throw new Error('Something went wrong while searching for tracks ' + e);
    }
  }
  /**
   * Fetch artist data including artist information, top tracks, and albums.
   * @param artistId - The ID of the artist to fetch data for.
   * @returns Artist data including artist information, top tracks, and albums.
   */
  async fetchArtistData(artistId: number) {
    const artistInfoPromise = axios.get(`${this.baseUrl}/artist/${artistId}`);
    const topTracksPromise = axios.get(
      `${this.baseUrl}/artist/${artistId}/top?limit=5`
    );
    const albumsPromise = axios.get(
      `${this.baseUrl}/artist/${artistId}/albums`
    );

    const [artistInfoResponse, topTracksResponse, albumsResponse] =
      await Promise.all([artistInfoPromise, topTracksPromise, albumsPromise]);

    const artistInfo = artistInfoResponse.data;
    const topTracks = topTracksResponse.data.data;
    const albums = albumsResponse.data.data;

    return { artistInfo, topTracks, albums };
  }
}

// Class instance with the specified base url
export const deezerWrapper = new Deezer(`${BASE_URL}`);
