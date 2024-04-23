import { LEVEL } from "../../../constants";
import { useLevelInfoDispatch } from "../../../context/Level";
import Button from "../../common/Button/Button";
import { sectionStyle } from "./LevelSelector.style";

const LevelSelector = ({ level, ...props }) => {
  const setLevel = useLevelInfoDispatch();
  return (
    <section css={sectionStyle} {...props}>
      <Button
        onClick={() => setLevel(LEVEL.EASY.TEXT)}
        isSelected={level === LEVEL.EASY.TEXT}
        variant="primary"
        size="medium"
      >
        Easy
      </Button>
      <Button
        onClick={() => setLevel(LEVEL.NORMAL.TEXT)}
        isSelected={level === LEVEL.NORMAL.TEXT}
        variant="primary"
        size="medium"
      >
        Normal
      </Button>
      <Button
        onClick={() => setLevel(LEVEL.HARD.TEXT)}
        isSelected={level === LEVEL.HARD.TEXT}
        variant="primary"
        size="medium"
      >
        Hard
      </Button>
    </section>
  );
};

export default LevelSelector;
