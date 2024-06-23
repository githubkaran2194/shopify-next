// components/AnimatedComponent.js
import { motion } from 'framer-motion';

const AnimatedComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Hello, Framer Motion!</h1>
    </motion.div>
  );
};

export default AnimatedComponent;
