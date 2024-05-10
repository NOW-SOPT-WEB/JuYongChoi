import { ImgHTMLAttributes } from "react";
import { imgStyle, shapeStyle, sizeStyle } from "./Img.style";

export interface ImgProps extends ImgHTMLAttributes<HTMLImageElement> {
  width?: string;
  height?: string;
  src: string;
  shape?: "rectangle" | "circle";
}

const Img = ({
  width = "50px",
  height = "50px",
  src,
  shape = "rectangle",
  ...props
}: ImgProps) => {
  return (
    <img
      {...props}
      src={src}
      css={[sizeStyle(width, height), imgStyle, shapeStyle(shape)]}
    />
  );
};

export default Img;
