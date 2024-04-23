import backImg from "../../../assets/card_back.png";
import { containerStyle, backImgStyle, frontImgStyle } from "./Card.style";

const Card = ({ isClicked, onFlip, frontImg }) => {
  return (
    <div onClick={onFlip} css={containerStyle}>
      {isClicked ? (
        <img src={frontImg} css={frontImgStyle} />
      ) : (
        <img src={backImg} css={backImgStyle} />
      )}
    </div>
  );
};

export default Card;
