import { LEVEL } from "../../../constants";
import Button from "../../common/Button/Button";
import { sectionStyle } from "./LevelSelector.style";

const LevelSelector = ({ onChange, level, ...props }) => {
  return (
    <section css={sectionStyle} {...props}>
      <Button
        onClick={() => onChange(LEVEL.EASY.TEXT)}
        isSelected={level === LEVEL.EASY.TEXT}
        variant="primary"
        size="medium"
      >
        {LEVEL.EASY.TEXT.toUpperCase()}
      </Button>
      <Button
        onClick={() => onChange(LEVEL.NORMAL.TEXT)}
        isSelected={level === LEVEL.NORMAL.TEXT}
        variant="primary"
        size="medium"
      >
        {LEVEL.NORMAL.TEXT.toUpperCase()}
      </Button>
      <Button
        onClick={() => onChange(LEVEL.HARD.TEXT)}
        isSelected={level === LEVEL.HARD.TEXT}
        variant="primary"
        size="medium"
      >
        {LEVEL.HARD.TEXT.toUpperCase()}
      </Button>
    </section>
  );
};

export default LevelSelector;
