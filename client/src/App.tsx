import {
  Box,
  Container,
  IconButton,
  InputBase,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { queryClient } from "./rtqClient";
import { useQuery } from "react-query";
import { BASE_URL } from "./constants";
import SearchIcon from "@mui/icons-material/Search";
import { BgImageWrapper, SearchBox } from "./components/styles/container";
import ViewTrackDetails from "./components/Tracks";

function HomeImageBox({ children }: any) {
  return <BgImageWrapper>{children}</BgImageWrapper>;
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

  const handleSearch = async () => {
    await queryClient.invalidateQueries("tracks");
  };

  return (
    <HomeImageBox>
      <Container>
        <Box>
          <Typography
            sx={{ color: "white", fontSize: "4rem", fontWeight: 800 }}
          >
            UNLEASH THE BEATS
          </Typography>
        </Box>
        <SearchBox>
          <InputBase
            placeholder="Search song"
            sx={{ flexGrow: 1, marginRight: 2 }}
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            endAdornment={
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            }
          />
        </SearchBox>
        <ViewTrackDetails results={tracks} />
      </Container>
    </HomeImageBox>
  );
}

export default App;
