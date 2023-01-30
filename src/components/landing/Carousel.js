import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Img1 from "../../assets/images/landingpage/img_1.webp";
import Img2 from "../../assets/images/landingpage/img_2.webp";

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
          md: "calc(100vh - 64px)",
        },
        maxHeight: 700,
        bgcolor: "#d5e8e526",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        style={{
          backgroundImage: `url(${currentImage ? Img1 : Img2})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="carousel_img"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 16, repeat: Infinity }}
      />

      <Grid
        container
        style={{
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={11}
          md={6}
          sx={{
            p: `2.5vh 1rem 2.5vh 1rem`,
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              color: "white",
              maxHeight: "70%",
              // background: "rgba(0, 0, 0, 0.5)",
              // backdropFilter: "blur(2px)",
            }}
            className="popin_ani"
          >
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{
                fontFamily: "'Alegreya', serif",
              }}
              className="slidetop_ani"
            >
              Welcome to Ocean Horse
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Catamaran', sans-serif",
              }}
              className="slidebottom_ani"
            >
              Explore the{" "}
              <span className="reveal_ani" style={{ animationDelay: "1s" }}>
                Andaman
              </span>{" "}
              with us.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Carousel;
