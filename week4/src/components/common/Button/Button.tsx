import { ComponentPropsWithRef, ReactElement, ReactNode } from "react";

import {
  buttonStyle,
  sizeStyle,
  variantStyle,
} from "@components/common/Button/Button.style";

import { SizeType } from "@/types/size";

export interface IButton extends ComponentPropsWithRef<"button"> {
  variant?: "primary" | "secondary" | "outline" | "default";
  size?: Extract<SizeType, "xLarge" | "large" | "medium" | "small">;
  icon?: ReactElement;
  children: ReactNode;
}

const Button = ({
  variant = "default",
  size = "medium",
  icon,
  ...props
}: IButton) => {
  return (
    <button
      {...props}
      css={[buttonStyle, variantStyle[variant], sizeStyle[size]]}
    >
      {icon}
      {props.children}
    </button>
  );
};

export default Button;
