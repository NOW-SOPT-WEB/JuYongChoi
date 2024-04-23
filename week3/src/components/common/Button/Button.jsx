import { buttonStyle, sizeStyle, variantStyle } from "./Button.style";

const Button = ({
  variant = "default",
  size = "medium",
  isSelected,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      css={[buttonStyle, variantStyle(variant, isSelected), sizeStyle(size)]}
    >
      {children}
    </button>
  );
};

export default Button;
