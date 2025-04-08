import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const letterVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
      type: "spring",
      stiffness: 150,   // 👈 smoother pop
      damping: 15,
    },
  }),
};

export default function AnimatedText({ text, className }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const totalDuration = text.length * 100 + 5000; // animation + 5s hold
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => setShow(true), 100);
    }, totalDuration);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {show && (
          <motion.div
            key={Date.now()}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            style={{ display: "inline-block" }}
          >
            {text.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariant}
                initial="hidden"
                animate="visible"
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
