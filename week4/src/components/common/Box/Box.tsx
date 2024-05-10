import { ElementType } from "react";
import { BoxStyleProps, getBoxStyle } from "./Box.style";

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  tag?: ElementType;
  styles?: BoxStyleProps;
}

const Box = ({ tag = "div", styles = {}, children }: BoxProps) => {
  const Tag = tag;
  return <Tag css={getBoxStyle(styles)}>{children}</Tag>;
};

export default Box;
