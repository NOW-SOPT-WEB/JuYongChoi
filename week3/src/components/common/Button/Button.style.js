import { css } from "@emotion/react";
import { Theme } from "../../../styles/theme/theme";

export const variantStyle = (variant, isSelected) => {
  const style = {
    default: css({
      backgroundColor: isSelected ? Theme.color.pink : Theme.color.black,
      color: Theme.color.white,
    }),
    primary: css({
      backgroundColor: isSelected ? Theme.color.pink : Theme.color.blue800,
      color: Theme.color.white,
    }),
    secondary: css({
      backgroundColor: isSelected ? Theme.color.pink : Theme.color.blue500,
      color: Theme.color.white,
    }),
  };
  return style[variant];
};

export const sizeStyle = (size) => {
  const style = {
    large: css({
      padding: "12px 18px",

      fontSize: Theme.text.medium.fontSize,
      lineHeight: Theme.text.medium.lineHeight,
    }),
    medium: css({
      padding: "10px 16px",

      fontSize: Theme.text.medium.fontSize,
      lineHeight: Theme.text.medium.lineHeight,
    }),
    small: css({
      padding: "8px 12px",

      fontSize: Theme.text.medium.fontSize,
      lineHeight: Theme.text.medium.lineHeight,
    }),
  };
  return style[size];
};

export const buttonStyle = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  border: "none",
  borderRadius: Theme.borderRadius.medium,

  backgroundColor: "white",

  fontWeight: 600,

  cursor: "pointer",
});
