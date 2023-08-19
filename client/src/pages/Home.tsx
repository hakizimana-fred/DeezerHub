import React from "react";
import {
  Box,
  Container,
  IconButton,
  InputBase,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { BgImageWrapper, SearchBox } from "../components/styles/container";
import ViewTrackDetails from "../components/Tracks";

function HomeImageBox({ children }: any) {
  return <BgImageWrapper>{children}</BgImageWrapper>;
}

export function Home({
  search,
  handleSearch,
  tracks,
  setSearch,
}: {
  search: string;
  handleSearch: () => Promise<void>;
  tracks: unknown;
  setSearch: (value: string) => void;
}) {
  return (
    <HomeImageBox>
      <Container>
        <Box>
          <Typography
            sx={{ color: "white", fontSize: "4rem", fontWeight: 800 }}
          >
            DeezerHub
          </Typography>
        </Box>
        <SearchBox>
          <InputBase
            placeholder="Search for  track"
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

export default Home;
