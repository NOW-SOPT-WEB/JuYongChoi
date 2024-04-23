import { wrapperStyle } from "./Counter.style";

const Counter = ({ maxCount, count, ...props }) => {
  return (
    <section css={wrapperStyle} {...props}>
      <span>{count}</span>
      <span>/</span>
      <span>{maxCount}</span>
    </section>
  );
};

export default Counter;
