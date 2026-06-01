import React from "react";
import TextField from "@mui/material/TextField";

const InputField = ({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <TextField
      name={name}
      type={type}
      fullWidth
      sx={{ mb: 2 }}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      error={!!error}
      helperText={error}
    />
  );
};

export default InputField;