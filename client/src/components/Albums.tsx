import { albums } from "../data";
import { Box, Grid, Typography } from "@mui/material";
import { AlbumWrapper } from "./styles/container";

function DisplayAlbums({ artist }: { artist: any }) {
  console.log("jus arist", artist);

  return (
    <>
      <Box my={2}>
        <Typography variant="h6">Album</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        {artist &&
          artist.topTracksWithAlbums.map((track) => {
            return (
              <>
                <Grid item xs={12} sm={6} md={3} key={""}>
                  <AlbumWrapper>
                    <img
                      src={track.albumImage}
                      alt={""}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />

                    <Typography variant="body1">
                      {track.album ? track.album : "No album"}
                    </Typography>
                    <Typography variant="body2">{track.releaseYear}</Typography>
                  </AlbumWrapper>
                </Grid>
              </>
            );
          })}
      </Box>
    </>
  );
}

export default DisplayAlbums;
