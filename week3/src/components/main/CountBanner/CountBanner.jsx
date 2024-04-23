import { BANNER, LEVEL } from "../../../constants";
import Counter from "../../common/Counter/Counter";
import Heading from "../../common/Heading/Heading";
import { bannerStyle } from "./CountBanner.style";

const CountBanner = ({ currentCount, level }) => {
  const maxCount = LEVEL[level.toUpperCase()].QUIZ_COUNT;

  return (
    <section css={bannerStyle}>
      <Heading size="xxLarge">{BANNER.TEXT}</Heading>
      <Counter count={currentCount} maxCount={maxCount} />
    </section>
  );
};

export default CountBanner;
