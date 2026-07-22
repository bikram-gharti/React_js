import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import CollectionCard from "../components/CollectionCard";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.item);
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
        gap: 4,
        p: 4,
      }}
    >
      {collection.map((item) => {
        return <CollectionCard key={item.id} item={item} />
      })}
    </Box>
  );
};

export default CollectionPage;
