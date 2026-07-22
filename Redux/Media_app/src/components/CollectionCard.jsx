import { Box, Typography, Button, Link } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { removeToast, removeCollection } from "../redux/features/collectionSlice";

const CollectionCard = (props) => {
  const dispatch = useDispatch()
  const removePhoto = (item) => {
    dispatch((removeCollection(item.id)))
    dispatch((removeToast()))
  };

  return (
    <Box
      sx={{
        height: 250,
        width: 250,
        // backgroundColor: "black",
        borderRadius: 2,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Link href={props.item.url} target="_blank" rel="noopener">
        <Box
          component="img"
          src={props.item.src}
          alt={props.item.title || "Search result"}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Link>
      <Box
        sx={{
          background: "linear-gradient(transparent, black)",
          position: "absolute",
          bottom: 0,
          textAlign: "center",
          width: "100%",
          py: 2,
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: "0.9rem", fontWeight: "bold", color: "white" }}
        >
          {props.item.title}
        </Typography>
        <Button
          variant="contained"
          onClick={() => removePhoto(props.item)}
          sx={{ height: 20, mt: 1, fontSize: "0.7rem", textTransform: "none" }}
        >
          remove
        </Button>
      </Box>
      <Typography>hello</Typography>
    </Box>
  );
};

export default CollectionCard;
