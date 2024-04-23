import { css } from "@emotion/react";
import { Theme } from "../../../styles/theme/theme";
import { BANNER } from "../../../constants";

export const bannerStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: Theme.spacing.spacing5,

  width: "100%",
  height: "240px",

  backgroundColor: BANNER.COLOR,

  "& h1": {
    color: Theme.color.white,
  },
});
