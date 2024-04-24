import { useEffect, useState } from "react";
import { CARD_FLIPPED_DURATION, LEVEL } from "../constants";
import { getRandomList } from "../utils/random";

export const useCardList = (level) => {
  const [cardState, setCardState] = useState(
    getRandomList(LEVEL[level.toUpperCase()].QUIZ_COUNT)
  );
  const [flippedCard, setFlippedCard] = useState([]);
  const [isSelecting, setIsSelecting] = useState(false);

  useEffect(() => {
    setCardState(getRandomList(LEVEL[level.toUpperCase()].QUIZ_COUNT));
  }, [level]);

  const handleCardClick = (id) => {
    const currentCard = cardState.find((item) => item.id === id); // 현재 클릭된 id의 카드 정보를 가져옴

    if (currentCard.flipped || currentCard.matched || isSelecting) return; // 현재 해당 카드가 뒤집혀져 있는 상태, 매칭된 상태, 혹은 카드 선택 중이라면 return

    const updatedCards = cardState.map((card) => {
      if (card.id === id) {
        return { ...card, flipped: true }; // 해당 id 카드의 filpped 상태를 true로 만듦
      }
      return card;
    });

    setCardState(updatedCards); // 카드 상태 업데이트

    setFlippedCard((arr) => [...arr, id]); // 뒤집혀 있는 카드 정보를 담고 있는 상태배열에, 현재 뒤집힌 카드의 id를 추가

    if (flippedCard.length === 1) {
      const firstCard = cardState.find((item) => item.id === flippedCard[0]);
      console.log(firstCard.cardId, currentCard.cardId);
      if (firstCard.cardId === currentCard.cardId) {
        const updatesCard = cardState.map((card) => {
          if (card.id === flippedCard[0] || card.id === id) {
            return { ...card, matched: true };
          }
          return card;
        });
        setCardState(updatesCard);
      } else {
        const resetCard = cardState.map((card) => {
          if ([...flippedCard, id].includes(card.id)) {
            return { ...card, flipped: false };
          }
          return card;
        });
        setIsSelecting(true);
        setTimeout(() => {
          setCardState(resetCard);
          setIsSelecting(false);
        }, CARD_FLIPPED_DURATION);
      }
      setFlippedCard([]);
    }
  };

  return { cardState, setCardState, handleCardClick };
};
