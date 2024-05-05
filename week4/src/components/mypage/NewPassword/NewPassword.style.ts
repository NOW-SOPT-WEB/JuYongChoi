import { css } from "@emotion/react";

export const formStyle = css({
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",

  width: "100%",
  height: "320px",

  "& > div": {
    width: "60%",
  },
});
