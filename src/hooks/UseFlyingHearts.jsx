// hooks/useFlyingHearts.js
import { useState } from "react";

export const UseFlyingHearts = () => {
  const [hearts, setHearts] = useState([]);

  const triggerHeart = (x, y) => {
    const id = Date.now() + Math.random();
    const newHeart = { id, x, y };
    setHearts((prev) => [...prev, newHeart]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((heart) => heart.id !== id));
    }, 2000);
  };

  return { hearts, triggerHeart };
};
