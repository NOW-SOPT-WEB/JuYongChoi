import { getTextStyle } from "./SupportingText.style";

export interface SupportingTextProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  isError?: boolean;
}

const SupportingText = ({ isError = false, children }: SupportingTextProps) => {
  return <p css={getTextStyle(isError)}>{children}</p>;
};

export default SupportingText;
