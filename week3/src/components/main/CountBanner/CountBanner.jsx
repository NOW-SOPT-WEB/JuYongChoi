import { css } from "@emotion/react";
import { BANNER, LEVEL } from "../../../constants";
import Button from "../../common/Button/Button";
import Counter from "../../common/Counter/Counter";
import Heading from "../../common/Heading/Heading";
import { bannerStyle } from "./CountBanner.style";
import { Theme } from "../../../styles/theme/theme";

const CountBanner = ({ onReset, currentCount, level }) => {
  const maxCount = LEVEL[level.toUpperCase()].QUIZ_COUNT;

  return (
    <section css={bannerStyle}>
      <Button
        onClick={onReset}
        css={css`
          position: absolute;
          bottom: ${Theme.spacing.spacing6};
          right: ${Theme.spacing.spacing6};
        `}
        size="large"
      >
        reset
      </Button>
      <Heading size="xxLarge">{BANNER.TEXT}</Heading>
      <Counter count={currentCount} maxCount={maxCount} />
    </section>
  );
};

export default CountBanner;
