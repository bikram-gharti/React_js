import React from "react";
import Button from "@mui/material/Button";

const SubmitButton = ({ text }) => {
  return (
    <Button type="submit" fullWidth variant="contained" sx={{ mb: 2 }}>
      {text}
    </Button>
  );
};

export default SubmitButton;