import { LabelHTMLAttributes } from "react";
import { textStyle } from "./Label.style";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  id?: string;
  label?: string;
}

const Label = ({ id, children, ...props }: LabelProps) => {
  return (
    <label css={textStyle} htmlFor={id} {...props}>
      {children}
    </label>
  );
};

export default Label;
