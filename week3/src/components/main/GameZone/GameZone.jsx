import { useEffect } from "react";
import Card from "../../common/Card/Card";
import { cardWrapperStyle } from "./GameZone.style";
import { useCardList } from "../../../hooks/useCardList";

const GameZone = ({ onCorrect, isRestarted, onRestart }) => {
  const {
    cardState: data,
    setCardState: mutate,
    handleCardClick,
  } = useCardList();

  useEffect(() => {
    handleCheckMatch();
    handleShouldRestart();
  }, [data, isRestarted]);

  const handleCheckMatch = () => {
    const matchCnt = Math.floor(data.filter((card) => card.matched).length / 2);
    onCorrect(matchCnt);
  };
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
