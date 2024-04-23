import { css } from "@emotion/react";
import { Theme } from "../../../styles/theme/theme";

export const cardWrapperStyle = css({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: Theme.spacing.spacing5,

  "& div": {
    placeSelf: "center",
  },
});
