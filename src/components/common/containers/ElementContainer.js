import { Container } from "@mui/system";

const ElementContainer = ({ maxWidth = "xl", children, ...others }) => {
  return (
    <Container maxWidth={maxWidth} {...others}>
      {children}
    </Container>
  );
};

export default ElementContainer;
