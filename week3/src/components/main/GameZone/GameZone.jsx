import { useEffect, useState } from "react";
import Card from "../../common/Card/Card";
import { cardWrapperStyle } from "./GameZone.style";
import { useCardList } from "../../../hooks/useCardList";

const GameZone = ({ level, onCorrect, isRestarted, onRestart }) => {
  const {
    cardState: data,
    setCardState: mutate,
    handleCardClick,
    matchCnt,
  } = useCardList(level);

  useEffect(() => {
    onCorrect(matchCnt);
  }, [data]);

  useEffect(() => {
    handleShouldRestart();
  }, [isRestarted]);

  /* isRestarted가 true(다시 시작해야함)면 카드 정보 초기화 + onRestart() */
  const handleShouldRestart = () => {
    if (isRestarted) {
      mutate((prev) =>
        prev.map((card) => ({ ...card, flipped: false, matched: false }))
      );
      onRestart();
    }
  };

  return (
    <section css={cardWrapperStyle}>
      {data.map((card, index) => {
        const cardItem = data.find((item) => item.id === card.id);

        return (
          <Card
            key={index}
            frontImg={card.img}
            isClicked={cardItem?.flipped || cardItem?.matched}
            onFlip={() => handleCardClick(card.id)}
          />
        );
      })}
    </section>
  );
};

export default GameZone;
