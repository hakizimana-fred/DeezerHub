import { Box, Container, Paper, styled } from "@mui/material";

export const SearchBox = styled(Box)(({ theme: Theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  padding: "8px 16px",
  borderRadius: 4,
}));

export const BgImageWrapper = styled(Box)(({ theme: Theme }) => ({
  height: "auto",
  width: "100vw",
  background:
    "linear-gradient(135deg, rgba(31, 44, 61, 0.8), rgba(255, 92, 106, 0.8), rgba(255, 195, 113, 0.8))",
  alignItems: "center",
  display: "flex",
  minHeight: "100vh",
  textAlign: "center",
}));

export const TrackBox = styled(Box)(({ theme: Theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  p: 2,
  m: 1,
}));

export const ArtistContainer = styled(Container)(({ theme: Theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
}));

export const ArtistBox = styled(Box)(({ theme: Theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "#fff",
  backgroundColor: "rgba(0,0,0,0.6)",
}));

export const TrackList = styled(Box)(({ theme: Theme }) => ({
  my: 1,
  borderBottom: "1px solid #ccc",
  paddingBottom: "5px",
  display: "flex",
  justifyContent: "space-between",
}));

export const AboutArtist = styled(Box)(({ theme: Theme }) => ({
  width: "200px",
  position: "relative",
  overflow: "hidden",
  flexShrink: 0,
}));

export const AlbumWrapper = styled(Paper)(({ theme: Theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  p: "2",
  m: "1",
}));
