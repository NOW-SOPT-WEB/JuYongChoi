import { useEffect, useState } from "react";
import { LEVEL } from "../constants";

export const useMemoryGame = (level) => {
  const [successCount, setSuccessCount] = useState(0);
  // const list = getRandomList(LEVEL[level.toUpperCase()].QUIZ_COUNT);
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
