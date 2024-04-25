import { css } from "@emotion/react";
import { Theme } from "../../../styles/theme/theme";

export const wrapperStyle = css({
  width: "180px",
  height: "200px",

  perspective: "1000px",
});

export const cardStyle = (isClicked) =>
  css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    position: "relative",

    top: "50%",

    borderRadius: Theme.borderRadius.medium,

    backgroundColor: Theme.color.white,

    boxShadow: `0 0 6px ${Theme.color.gray400}`,

    cursor: "pointer",

    transformStyle: "preserve-3d",
    transform: isClicked ? "rotateY(180deg)" : "none",
    transition: "all 0.4s ease-in",
    perspectiveOrigin: "center",
  });

export const backImgStyle = css({
  position: "absolute",

  width: "180px",
  height: "200px",

  zIndex: Theme.zIndex.overlayHigh,

  padding: "50px 40px",

  borderRadius: Theme.borderRadius.medium,
  boxShadow: `0 0 6px ${Theme.color.gray400}`,
  backgroundColor: "white",

  objectFit: "cover",

  backfaceVisibility: "hidden",
});

export const frontImgStyle = css({
  position: "absolute",

  width: "180px",
  height: "200px",

  zIndex: Theme.zIndex.overlayMiddle,

  borderRadius: Theme.borderRadius.medium,

  objectFit: "cover",

  transform: "rotateY(180deg)",
});
