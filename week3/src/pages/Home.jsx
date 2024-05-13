import LevelSelector from "../components/main/LevelSelector/LevelSelector";
import CountBanner from "../components/main/CountBanner/CountBanner";
import GameZone from "../components/main/GameZone/GameZone";
import { useState } from "react";
import CompleteModal from "../components/main/CompleteModal/CompleteModal";
import { useCardList, useMemoryGame } from "../hooks";
import { LEVEL } from "../constants";
import { getRandomList } from "../utils/random";

const Main = () => {
  const [difficulty, setDifficulty] = useState("easy"); // 난이도

  const { isRestarted, handleRestarted } = useMemoryGame(difficulty); // 리스타팅(or reset)을 위한 게임 메모리
  const { cardState, setCardState, handleCardClick } = useCardList(difficulty); // 카드게임 리스트 관련 data, handler

  const handleDifficulty = (level) => {
    setDifficulty(level);
  };

  const isDone = !cardState.some((card) => !card.matched);
  const successCount = Math.floor(
    cardState.filter((card) => card.matched).length / 2
  );

  if (isRestarted) {
    setCardState(getRandomList(LEVEL[difficulty.toUpperCase()].QUIZ_COUNT));
    handleRestarted();
  }

  return (
    <main>
      <CountBanner
        onReset={handleRestarted}
        currentCount={successCount}
        level={difficulty}
      />
      <LevelSelector onChangeLevel={handleDifficulty} level={difficulty} />
      <GameZone onCardFlip={handleCardClick} cardList={cardState} />
      <CompleteModal isGameDone={isDone} onGameRestart={handleRestarted} />
    </main>
  );
};

export default Main;
