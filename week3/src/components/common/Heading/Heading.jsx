import { headingStyle } from "./Heading.style";

const TAG_BY_SIZE = {
  xxLarge: "h1",
  xLarge: "h2",
  large: "h3",
  medium: "h4",
  small: "h5",
  xSmall: "h6",
};

const Heading = ({ size = "large", children, ...props }) => {
  const Tag = TAG_BY_SIZE[size];

  return (
    <Tag css={headingStyle(size)} {...props}>
      {children}
    </Tag>
  );
};

export default Heading;
