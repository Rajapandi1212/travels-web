import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Img1 from "../../assets/images/landingpage/img_1.webp";
import Img2 from "../../assets/images/landingpage/img_2.webp";
import Header from "../common/header";

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(!currentImage);
    }, 8000);
    return () => clearInterval(interval);
  }, [currentImage]);
  return (
    <Box
      sx={{
        height: {
          xs: "70vh",
          md: "calc(100vh)",
        },
        maxHeight: 700,
        bgcolor: "#d5e8e526",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        style={{ backgroundImage: `url(${currentImage ? Img1 : Img2})` }}
        className="carousel_img"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 16, repeat: Infinity }}
      />
      <Header />
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
