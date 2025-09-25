import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CustomCursor = ({ cursorVariant }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePos.x - 15,
      y: mousePos.y - 15,
      height: 30,
      width: 30,
      borderRadius: "50%",
      backgroundColor: "yellow",
      mixBlendMode: "difference", // so it reveals nicely
    },
    noPointer: {
      x: mousePos.x - 2,
      y: mousePos.y - 2,
      height: 4,
      width: 4,
      borderRadius: "50%",
      backgroundColor: "yellow",
      mixBlendMode: "destination-out", // so it reveals nicely
    },
    button: {
      x: mousePos.x - 25,
      y: mousePos.y - 25,
      height: 200,
      width: 200,
      borderRadius: "50%",
      backgroundColor: "purple",
    },
    textReveal: {
      x: mousePos.x - 75,
      y: mousePos.y - 75,
      height: 150,
      width: 150,
      borderRadius: "50%",
      backgroundColor: "yellow",
      zIndex: 100,
      mixBlendMode: "destination-out", // makes mask effect
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{ mixBlendMode: "difference" }}
    />
  );
};

export default CustomCursor;
