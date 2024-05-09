import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import Label from "@components/common/Label/Label";
import SupportingText from "@components/common/SupportingText/SupportingText";
import { inputStyle, inputWrapperStyle, sizeStyle } from "./Input.style";
import { SizeType } from "@/types/size";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  size?: Extract<SizeType, "large" | "medium" | "small">;
  isError?: boolean;
  supportingText?: string;
}

const Input = (
  {
    label,
    size = "medium",
    isError = false,
    supportingText,
    ...props
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <div>
      <Label id={label}>{label}</Label>
      <div css={[inputWrapperStyle(isError)]}>
        <input ref={ref} css={[inputStyle, sizeStyle[size]]} {...props} />
      </div>
      <SupportingText isError={isError}>{supportingText}</SupportingText>
    </div>
  );
};

export default forwardRef(Input);
