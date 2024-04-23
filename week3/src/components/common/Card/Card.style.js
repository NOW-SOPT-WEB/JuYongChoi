import { css } from "@emotion/react";
import { Theme } from "../../../styles/theme/theme";

export const containerStyle = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "max-content",

  borderRadius: Theme.borderRadius.medium,

  backgroundColor: Theme.color.white,

  boxShadow: `0 0 6px ${Theme.color.gray400}`,

  cursor: "pointer",
});

export const backImgStyle = css({
  width: "180px",
  height: "200px",

  padding: "50px 40px",

  objectFit: "cover",
});

export const frontImgStyle = css({
  width: "180px",
  height: "200px",

  borderRadius: Theme.borderRadius.medium,

  objectFit: "cover",
});
