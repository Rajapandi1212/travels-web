import { Box } from "@mui/system";
import ElementContainer from "./components/common/containers/ElementContainer";
import Header from "./components/common/header";

const App = () => {
  return (
    <Box>
      <Header />
      <ElementContainer sx={{ height: "1000px" }}>1</ElementContainer>
      <ElementContainer sx={{ height: "1000px" }}>2</ElementContainer>
    </Box>
  );
};

export default App;
