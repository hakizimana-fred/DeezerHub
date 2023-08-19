import { albums } from "../data";
import { Box, Grid, Typography } from "@mui/material";
import { AlbumWrapper } from "./styles/container";

function DisplayAlbums() {
  return (
    <>
      <Box my={2}>
        <Typography variant="h6">Album</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        {albums.map((album) => (
          <Grid item xs={12} sm={6} md={3} key={album.title}>
            <AlbumWrapper>
              <img
                src={album.image}
                alt={album.title}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
              <Typography variant="body1">{album.title}</Typography>
              <Typography variant="body2">{album.duration}</Typography>
            </AlbumWrapper>
          </Grid>
        ))}
      </Box>
    </>
  );
}

export default DisplayAlbums;
