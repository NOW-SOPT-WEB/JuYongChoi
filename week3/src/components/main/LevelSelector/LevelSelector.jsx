import { LEVEL } from "../../../constants";
import Button from "../../common/Button/Button";
import { sectionStyle } from "./LevelSelector.style";

const LevelSelector = ({ onChangeLevel, level, ...props }) => {
  const LevelArray = Object.keys(LEVEL);

  return (
    <section css={sectionStyle} {...props}>
      {LevelArray.map((item) => (
        <Button
          key={item}
          onClick={() => onChangeLevel(LEVEL[item].TEXT)}
          isSelected={level === LEVEL[item].TEXT}
          variant="primary"
          size="medium"
        >
          {LEVEL[item].TEXT.toUpperCase()}
        </Button>
      ))}
    </section>
  );
};

export default LevelSelector;
