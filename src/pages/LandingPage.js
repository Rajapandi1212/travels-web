// import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Landing from "../components/landing";
const LandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <Landing />
    </motion.div>
  );
};

export default LandingPage;
