import { css } from "@emotion/react";
import { Theme } from "../../../styles/theme/theme";
import { fadeIn } from "../../../styles/animation";

export const backgroundStyle = css({
  position: "fixed",
  top: 0,
  left: 0,

  width: "100%",
  height: "100%",

  zIndex: Theme.zIndex.overlayMiddle,

  backgroundColor: "rgba(0, 0, 0, 0.2)",

  animation: `${fadeIn} 0.2s ease-in`,
});

export const overlayStyle = css({
  position: "absolute",
  top: 0,
  bottom: 0,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: Theme.spacing.spacing5,

  minWidth: "300px",
  maxWidth: "600px",

  zIndex: Theme.zIndex.overlayTop,

  padding: Theme.spacing.spacing5,
  margin: "auto auto",

  border: "none",
  borderRadius: Theme.borderRadius.large,

  boxShadow: `0 0 6px ${Theme.color.gray400}`,

  animation: `${fadeIn} 0.2s ease-in`,
});
