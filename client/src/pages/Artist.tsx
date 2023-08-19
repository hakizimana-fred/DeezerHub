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

function ArtistPage() {
  const { id } = useParams();

  console.log(id, "id");
  //    useEffect(() => {
  //      const artistId =
  //    }, [])

  return (
    <ArtistContainer>
      <Grid container>
        <Grid item xs={12} sm={6} md={8}>
          <Paper sx={{ display: "flex" }}>
            <AboutArtist>
              <img
                src={artist.image}
                alt={artist.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <ArtistBox>
                <Typography variant="h5">{artist.name}</Typography>
                <Typography variant="body2">{artist.fans} Fans</Typography>
                <Typography variant="body2">{artist.description}</Typography>
              </ArtistBox>
            </AboutArtist>
            <Box sx={{ p: 2, flexGrow: 1 }}>
              <Typography variant="subtitle1" color="text.secondary">
                Top Tracks:
              </Typography>
              {artist.topTracks.map((track) => (
                <TrackList key={track.title}>
                  <Typography variant="body2">{track.title}</Typography>
                  <Box component="span">{track.duration}</Box>
                </TrackList>
              ))}
            </Box>
          </Paper>
          <DisplayAlbums />
        </Grid>
      </Grid>
    </ArtistContainer>
  );
}

export default ArtistPage;
