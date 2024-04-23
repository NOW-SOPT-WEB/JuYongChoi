import { css } from "@emotion/react";
import { Theme } from "../../../styles/theme/theme";
import { BANNER } from "../../../constants";

export const wrapperStyle = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: Theme.spacing.spacing3,

  width: "120px",

  padding: "16px 32px",

  borderRadius: Theme.borderRadius.medium,

  color: Theme.color.black,
  backgroundColor: BANNER.COUNTER_BOX_COLOR,

  "& span": {
    fontWeight: 600,

    fontSize: Theme.heading.large.fontSize,
    lineHeight: Theme.heading.large.lineHeight,
  },
});
