import { Search } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  return (
    <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mt:4 }}>
      <TextField
        placeholder="Enter Keywords to Search Photos"
        size="small"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        onClick={() => dispatch(setQuery(text))}
        variant="contained"
        sx={{ py: 1 }}
      >
        <Search />
      </Button>
    </Box>
  );
};

export default SearchBar;
