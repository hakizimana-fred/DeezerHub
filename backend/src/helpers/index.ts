export function processedTracks(tracks: any[]) {
  return (
    tracks.length > 0 &&
    tracks.map((track: any) => ({
      artist_name: track.artist.name,
      duration: track.duration,
      album_name: track.album.title,
      artist_id: track.artist.id,
      image_url: track.album.cover_medium,
    }))
  );
}
