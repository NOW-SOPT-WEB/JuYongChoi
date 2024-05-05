import { Theme } from "@/styles/theme";
import { css } from "@emotion/react";

export const wrapperStyle = css({
  display: "flex",
  gap: Theme.spacing.spacing5,

  fontSize: Theme.text.medium.fontSize,
  lineHeight: Theme.text.medium.lineHeight,

  "& p": {
    width: "50%",
    whiteSpace: "pre-line",
  },
});

export const fieldStyle = css({
  fontWeight: 600,
});
