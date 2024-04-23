import { textStyle } from "./Text.style";

const Text = ({ size = "medium", children, ...props }) => {
  return (
    <p css={textStyle[size]} {...props}>
      {children}
    </p>
  );
};

export default Text;
