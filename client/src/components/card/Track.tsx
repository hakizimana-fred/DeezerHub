import { Paper, Typography, Grid } from "@mui/material";
import { ITrack } from "../../types/types";
import { FC } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { durationInMnAndS } from "../../utils";

export const TrackCard: FC<{ track: ITrack }> = ({ track }) => {
  return (
    <Grid item xs={12} sm={6} md={4} key={track.album_name}>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          m: 1,
        }}
      >
        <img
          src={track.image_url}
          alt={track.artist_name}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
        <Typography variant="body1">
          {durationInMnAndS(track.duration)}
        </Typography>
        <Typography variant="body1">
          <strong>{track.album_name}</strong>
        </Typography>
        <Link to={`/artist/${track.artist_id}`}>
          <Typography
            variant="body1"
            sx={{ textDecoration: "underline", cursor: "pointer" }}
          >
            {track.artist_name}
          </Typography>
        </Link>
      </Paper>
    </Grid>
  );
};
