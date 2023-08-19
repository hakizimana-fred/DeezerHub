import {
  Container,
  Paper,
  Text,
  Input,
  Button,
  Divider,
  Title,
} from "@mantine/core";
import React, { useState } from "react";
import axios from "axios";
import { queryClient } from "./rtqClient";
import { useQuery } from "react-query";
import { BASE_URL } from "./constants";
import moment from "moment";

interface ITrack {
  artist_id: number;
  artist_name: string;
  album_name: string;
  duration: number;
}

function App() {
  const [search, setSearch] = useState<string>("");

  async function getTracks() {
    if (search.trim() !== "" && search.length > 3) {
      const {
        data: { tracks },
      } = await axios.get(`${BASE_URL}/api/v1/search?track=${search}`);
      return tracks;
    }
  }

  const {
    data: tracks,
    isLoading,
    isError,
  } = useQuery("tracks", getTracks, {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  if (isError) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await queryClient.invalidateQueries("tracks");
  };

  return (
    <Container size="xs" mt={30}>
      <Paper shadow="xs">
        <Title align="center" order={2}>
          Deezer search Hub
        </Title>
        <Divider />
        <form onClick={handleSubmit}>
          <Input
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            placeholder="Enter track name"
            size="lg"
          />
          <Button
            type="submit"
            fullWidth
            size="lg"
            style={{ marginTop: "1rem" }}
          >
            Search
          </Button>
        </form>
        <div style={{ marginTop: "1rem" }}>
          {tracks &&
            tracks.map((track: ITrack) => (
              <Paper key={track.artist_id} style={{ marginBottom: "0.5rem" }}>
                <Text weight={700}>{track.artist_name}</Text>
                <Text>{track.album_name}</Text>
                <Text>Duration: {track.duration} seconds</Text>
              </Paper>
            ))}
        </div>
      </Paper>
    </Container>
  );
}

export default App;
