import { useState } from "react";

export const useMemoryGame = () => {
  const [isRestarted, setIsRestarted] = useState(false);

  const handleRestarted = () => {
    setIsRestarted((prev) => !prev);
  };

  return {
    isRestarted,
    handleRestarted,
  };
};
