import { Theme } from "@/styles/theme";
import { css } from "@emotion/react";

export const formStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: Theme.spacing.spacing4,

  "& div": {
    width: "100%",
  },
});
