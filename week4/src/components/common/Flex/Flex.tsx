import { ElementType } from "react";
import { FlexStyleProps, getFlexStyle } from "./Flex.style";

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  tag?: ElementType;
  styles?: FlexStyleProps;
}

const Flex = ({ tag = "div", styles = {}, children, ...props }: FlexProps) => {
  const Tag = tag;

  return (
    <Tag css={getFlexStyle(styles)} {...props}>
      {children}
    </Tag>
  );
};

export default Flex;
