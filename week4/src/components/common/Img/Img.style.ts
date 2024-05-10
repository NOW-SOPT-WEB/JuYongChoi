import { css } from "@emotion/react";
import { ImgProps } from "./Img";
import { Theme } from "@/styles/theme";

export const shapeStyle = (shape: Required<ImgProps>["shape"]) =>
  css({
    borderRadius: shape === "rectangle" ? Theme.borderRadius.medium : "50%",
  });

export const imgStyle = css({
  objectFit: "cover",
});

export const sizeStyle = (
  width: Required<ImgProps>["width"],
  height: Required<ImgProps>["height"]
) =>
  css({
    width,
    height,
  });
