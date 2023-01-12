import { AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: (theme) => theme.palette.grey[50],
          boxShadow: "0px 1px 2px 0px #d8fff3c2, 0px 1px 1px 0px #e5f2ee;",
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            maxWidth: 1536,
            mx: "auto",
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default Header;
