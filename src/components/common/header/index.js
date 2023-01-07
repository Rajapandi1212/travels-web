import { AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";

const Header = () => {
  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            width: "100%",
            maxWidth: 1600,
            mx: "auto",
          }}
        >
          Fixed bar
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default Header;
