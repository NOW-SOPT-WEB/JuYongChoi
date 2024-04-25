import LevelSelector from "../components/main/LevelSelector/LevelSelector";
import CountBanner from "../components/main/CountBanner/CountBanner";
import GameZone from "../components/main/GameZone/GameZone";
import { useEffect, useState } from "react";
import CompleteModal from "../components/main/CompleteModal/CompleteModal";
import { useMemoryGame } from "../hooks";
import { LEVEL } from "../constants";

const Main = () => {
  const [difficulty, setDifficulty] = useState("easy");

  const {
    successCount,
    isRestarted,
    handleCorrect,
    handleReset,
    handleRestart,
  } = useMemoryGame(difficulty);

  const isDone = successCount === LEVEL[difficulty.toUpperCase()].QUIZ_COUNT;

  useEffect(() => {
    handleReset();
  }, [difficulty]);

  return (
    <main>
      <CountBanner
        onReset={handleRestart}
        currentCount={successCount}
        level={difficulty}
      />
      <LevelSelector onChangeLevel={setDifficulty} level={difficulty} />
      <GameZone
        level={difficulty}
        onCorrect={handleCorrect}
        isRestarted={isRestarted}
        onRestart={handleRestart}
      />
      <CompleteModal
        isDone={isDone}
        onReset={handleReset}
        onRestart={handleRestart}
      />
    </main>
  );
};

export default Main;
