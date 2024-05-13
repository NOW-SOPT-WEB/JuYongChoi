import backImg from "../../../assets/card_back.png";
import {
  cardStyle,
  backImgStyle,
  frontImgStyle,
  wrapperStyle,
} from "./Card.style";

const Card = ({ isClicked, onFlip, frontImg }) => {
  return (
    <div css={wrapperStyle} onClick={onFlip}>
      <div css={cardStyle(isClicked)}>
        <img src={frontImg} css={frontImgStyle} />
        <img src={backImg} css={backImgStyle} />
      </div>
    </div>
  );
};

export default Card;
