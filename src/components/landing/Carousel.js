import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Img1 from "../../assets/images/landingpage/img_1.webp";

const Carousel = () => {
  return (
    <Box
      sx={{
        height: {
          xs: "70vh",
          md: "calc(100vh - 68px)",
        },
        maxHeight: 700,
        bgcolor: "#d5e8e526",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        style={{ backgroundImage: `url(${Img1})` }}
        className="carousel_img"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 24, repeat: Infinity }}
      />
      <p
        style={{
          textAlign: "center",
          color: "white",
          top: "50%",
          position: "absolute",
        }}
      >
        hello
      </p>
    </Box>
  );
};

export default Carousel;
