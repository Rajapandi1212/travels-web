import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import Header from "./components/common/header";

const App = () => {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
};

export default App;
