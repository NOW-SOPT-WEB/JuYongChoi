import LevelSelector from "../components/main/LevelSelector/LevelSelector";
import CountBanner from "../components/main/CountBanner/CountBanner";
import GameZone from "../components/main/GameZone/GameZone";
import { useLevelInfoState } from "../context/Level";
import { useEffect } from "react";
import CompleteModal from "../components/main/CompleteModal/CompleteModal";
import { useMemoryGame } from "../hooks";
import { LEVEL } from "../constants";

const Main = () => {
  const level = useLevelInfoState();
  const {
    successCount,
    isRestarted,
    handleCorrect,
    handleReset,
    handleRestart,
  } = useMemoryGame(level);
  const isDone = successCount === LEVEL[level.toUpperCase()].QUIZ_COUNT;

  useEffect(() => {
    handleReset();
  }, [level]);

  return (
    <main>
      <CountBanner currentCount={successCount} level={level} />
      <LevelSelector level={level} />
      <GameZone
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
