import { Container, Grid } from "@mui/material";

import { TrackCard } from "./card/Track";
import { ITrack } from "../types/types";

function ViewTrackDetails({ results }: { results: any }) {
  return (
    <Container>
      <Grid container spacing={2}>
        {results &&
          results.map((track: ITrack, index: number) => (
            <TrackCard track={track} key={index} />
          ))}
      </Grid>
    </Container>
  );
}

export default ViewTrackDetails;
