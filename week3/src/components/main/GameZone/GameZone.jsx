import Card from "../../common/Card/Card";
import { cardWrapperStyle } from "./GameZone.style";

const GameZone = ({ onCardFlip, cardList, ...props }) => {
  return (
    <section css={cardWrapperStyle} {...props}>
      {cardList.map((card, index) => {
        const cardItem = cardList.find((item) => item.id === card.id);

        return (
          <Card
            key={index}
            frontImg={card.img}
            isClicked={cardItem?.flipped || cardItem?.matched}
            onFlip={() => onCardFlip(card.id)}
          />
        );
      })}
    </section>
  );
};

export default GameZone;
