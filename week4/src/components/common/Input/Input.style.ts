import { css } from "@emotion/react";

import { Theme } from "@styles/theme";
import { InputProps } from "./Input";

export const variantStyle = {
  default: css({
    backgroundColor: Theme.color.gray100,
  }),

  text: css({
    border: `1px solid ${Theme.color.gray200}`,
    backgroundColor: "transparent",
  }),
};

export const inputWrapperStyle = (isError: Required<InputProps>["isError"]) =>
  css({
    display: "flex",
    gap: "12px",
    alignItems: "center",

    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: Theme.borderRadius.medium,
    backgroundColor: Theme.color.gray100,

    transition: "all .2s ease-in",

    "&:focus-within": {
      boxShadow: isError
        ? `inset 0 0 0 1.5px ${Theme.color.red100}`
        : `inset 0 0 0 1.5px ${Theme.color.gray300}`,
    },
  });

export const sizeStyle = {
  large: css({
    padding: "12px 16px",

    fontSize: Theme.text.medium.fontSize,
    lineHeight: Theme.text.medium.lineHeight,
  }),

  medium: css({
    padding: "10px 14px",

    fontSize: Theme.text.medium.fontSize,
    lineHeight: Theme.text.medium.lineHeight,
  }),

  small: css({
    padding: "8px 12px",

    fontSize: Theme.text.small.fontSize,
    lineHeight: Theme.text.small.lineHeight,
  }),
};

export const inputStyle = css({
  width: "100%",

  padding: "10px 12px",

  border: "none",
  borderRadius: Theme.borderRadius.small,

  backgroundColor: "transparent",

  fontSize: Theme.text.medium.fontSize,
  lineHeight: Theme.text.medium.lineHeight,

  outline: 0,
});
