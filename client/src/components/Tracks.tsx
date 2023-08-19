import { Container, Paper, Typography, Grid } from "@mui/material";

import { tracks } from "../data";

function ViewTrackDetails({ selectedValue = 0, results }: { results: any }) {
  const chosenTrack = tracks[selectedValue];

  console.log(tracks.length, "length");
  return (
    <Container>
      <Grid container spacing={2}>
        {tracks.map((track, index) => (
          <Grid item xs={12} sm={6} md={4} key={track.album}>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                m: 1,
              }}
            >
              <img
                src={track.image}
                alt={track.artist}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
              <Typography variant="body1">{track.duration}</Typography>
              <Typography variant="body1">
                <strong>{track.album}</strong>
              </Typography>
              <div title={"/artists"}>
                <Typography
                  variant="body1"
                  sx={{ textDecoration: "underline" }}
                >
                  {track.artist}
                </Typography>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ViewTrackDetails;
