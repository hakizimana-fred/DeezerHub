import axios from 'axios';
import moment from 'moment';
import { BASE_URL } from '../constants';
import { processedTracks } from '../helpers';
class Deezer {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

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

export const deezerWrapper = new Deezer(`${BASE_URL}`);
