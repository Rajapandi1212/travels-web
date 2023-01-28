import { AnimatePresence, motion } from "framer-motion";

const AnimatedContainer = ({ children }) => {
  const animate = {
    rotate: [180, 0],
    scale: [0.9, 1],
  };
  const wrapperVariants = {
    initial: {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
      transition: { duration: 0.4 },
    },
    animate: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: { duration: 0.8, staggerChildren: 0.1 },
    },
    exit: {
      clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
      transition: { duration: 0.4 },
    },
  };
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="app"
        variants={wrapperVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedContainer;
