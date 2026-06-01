import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const AuthLinks = ({ action, setAction }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
      
      {action !== "Forgot Password" && (
        <Link component="button" onClick={() => setAction("Forgot Password")}>
          Forgot password
        </Link>
      )}

      {action === "Sign In" ? (
        <Link component="button" onClick={() => setAction("Sign Up")}>
          Sign Up
        </Link>
      ) : (
        <Link component="button" onClick={() => setAction("Sign In")}>
          Already have an account? Sign In
        </Link>
      )}

    </Box>
  );
};

export default AuthLinks;