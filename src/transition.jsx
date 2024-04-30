import { motion } from "framer-motion";

const transition = (Component) => {
  return () => (
    <>
      <Component />
      <motion.div
        className="slide_in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide_out"
        initial={{ opacity: 1 }}
        animate={{ scaleY: 0, opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default transition;
