import { getTextStyle } from "./SupportingText.style";

export interface SupportingTextProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  isError?: boolean;
}

const SupportingText = ({ isError = false, children }: SupportingTextProps) => {
  return <span css={getTextStyle(isError)}>{children}</span>;
};

export default SupportingText;
