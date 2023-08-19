import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL } from "./constants";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ArtistPage from "./pages/Artist";
import Loader from "./components/Loader";

function App() {
  const [search, setSearch] = useState<string>("");

  console.log(import.meta.env.VITE_BASE_URL_PROD, "prod url");

  async function getTracks(query: string) {
    if (query.trim() !== "" && query.length > 3) {
      const {
        data: { tracks },
      } = await axios.get(`${BASE_URL}/api/v1/search?track=${query}`);
      return tracks;
    }
  }

  const {
    data: tracks,
    isLoading,
    isError,
    refetch,
  } = useQuery("tracks", () => getTracks(search), {
    refetchInterval: 10000,
  });

  const handleSearch = async () => {
    //await queryClient.invalidateQueries("tracks");
    await refetch();
  };

  if (isError) return <div>Request Failed</div>;
  if (isLoading) return <Loader />;

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              search={search}
              handleSearch={handleSearch}
              tracks={tracks}
              setSearch={setSearch}
            />
          }
        />
        <Route path="/artist/:id" element={<ArtistPage />} />
      </Routes>
    </>
  );
}

export default App;
