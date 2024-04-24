import { useState } from "react";

export const useMemoryGame = () => {
  const [successCount, setSuccessCount] = useState(0);
  const [isRestarted, setIsRestarted] = useState(false);

  const handleCorrect = (count) => {
    if (count <= successCount) return;

    setSuccessCount(count);
  };

  const handleReset = () => {
    setSuccessCount(0);
  };

  const handleRestart = () => {
    handleReset();
    setIsRestarted((prev) => !prev);
  };

  return {
    successCount,
    isRestarted,
    handleCorrect,
    handleReset,
    handleRestart,
  };
};
