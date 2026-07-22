import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { fetchPhotos } from "../api/mediaApi";
import { useDispatch, useSelector } from "react-redux";
import {
  setQuery,
  setResult,
  setLoading,
  setError,
} from "../redux/features/searchSlice";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const { query, result, loading, error } = useSelector(
    (state) => state.search,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        const res = await fetchPhotos(query);
        const data = res.results.map((items) => ({
          id: items.id,
          title: items.alt_description,
          thumbnail: items.urls.small,
          src: items.urls.full,
          url: items.links.html,
        }));
        dispatch(setResult(data));
        console.log(res);
      } catch (error) {
        dispatch(setError(error.message));
      }
    };
    getData();
  }, [query, dispatch]);

  if (error) return <h1>error</h1>;
  if (loading) return <h1>loading...</h1>;
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
        gap: 4,
        p: 4,
      }}
    >
      {result.map((item) => (
          <ResultCard key={item.id} item={item} />
      ))}
    </Box>
  );
};

export default ResultGrid;
