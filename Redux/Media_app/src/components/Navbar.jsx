import {Box, AppBar, Typography, IconButton, Toolbar, Link} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import { Link } from "react-router-dom";

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar variant="dense" sx={{display:"flex", justifyContent:"space-between"}}>
          <Box sx={{display:"flex", alignItems:"center"}}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Link
              href="/"
              sx={{
                color: "inherit",
              }}
            >
              <Typography variant="h6">Media App</Typography>
            </Link>
          </Box>
          <Box sx={{display:"flex", gap:2}}>
            <Link href="/" sx={{backgroundColor:"white", textDecoration:"none", px:1.5, py:0.5, borderRadius:1.5}}><Typography variant="body1" sx={{color:"blue", fontSize:"0.9rem", fontWeight:"bold"}}>Search Photo</Typography></Link>
            <Link href="/collection" sx={{backgroundColor:"white", textDecoration:"none", px:1.5, py:0.5, borderRadius:1.5}}><Typography variant="body1" sx={{color:"blue", fontSize:"0.9rem", fontWeight:"bold"}}>Photo Collection</Typography></Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
