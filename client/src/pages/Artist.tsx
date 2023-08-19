import { Paper, Typography, Grid, Box } from "@mui/material";
import { artist } from "../data";
// import DisplayAlbums from "../components/tracks/albums";
import {
  AboutArtist,
  ArtistBox,
  ArtistContainer,
  TrackList,
} from "../components/styles/container";
import DisplayAlbums from "../components/Albums";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import Loader from "../components/Loader";
import { BASE_URL } from "../constants";
import { durationInMnAndS } from "../utils";

function ArtistPage() {
  const { id } = useParams();

  async function getArtist(artistId: number) {
    const {
      data: { artist: singer },
    } = await axios.get(`${BASE_URL}/api/v1/search/${artistId}`);
    return singer;
  }

  const {
    data: artist,
    isLoading,
    refetch,
    isError,
  } = useQuery("artist", () => getArtist(Number(id)), {
    refetchInterval: 10000,
    onSuccess: (data) => console.log(data, "data"),
  });

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) return <Loader />;
  if (isError) return <div>Error fetching artist details</div>;

  return (
    <ArtistContainer>
      <Grid container>
        <Grid item xs={12} sm={6} md={8}>
          <Paper sx={{ display: "flex" }}>
            <AboutArtist>
              {/* <img
                src={artist.image}
                alt={artist.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              /> */}
              <ArtistBox>
                <Typography variant="h5">{artist.name}</Typography>
                {/* <Typography variant="body2">{artist.fans} Fans</Typography>
                <Typography variant="body2">{artist.description}</Typography> */}
              </ArtistBox>
            </AboutArtist>
            <Box sx={{ p: 2, flexGrow: 1 }}>
              <Typography variant="subtitle1" color="text.secondary">
                Top Tracks:
              </Typography>
              {artist &&
                artist.topTracksWithAlbums.map((track: any) => (
                  <TrackList key={track.title}>
                    <Typography variant="body2">{track.title}</Typography>
                    <Box component="span">
                      {durationInMnAndS(track.duration)}
                    </Box>
                  </TrackList>
                ))}
            </Box>
          </Paper>
          <DisplayAlbums artist={artist} />
        </Grid>
      </Grid>
    </ArtistContainer>
  );
}

export default ArtistPage;
