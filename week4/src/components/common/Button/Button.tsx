import { ComponentPropsWithRef, ReactNode } from "react";

import {
  buttonStyle,
  sizeStyle,
  variantStyle,
} from "@components/common/Button/Button.style";

import { SizeType } from "@/types/size";

export interface IButton extends ComponentPropsWithRef<"button"> {
  variant?: "primary" | "secondary" | "outline" | "default";
  size?: Extract<SizeType, "xLarge" | "large" | "medium" | "small">;
  children: ReactNode;
}

const Button = ({
  variant = "default",
  size = "medium",
  ...props
}: IButton) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const { key } = e;
    if (key === "Enter") {
      props?.onClick;
    }
  };
  return (
    <button
      tabIndex={0}
      onKeyDown={handleKeyDown}
      {...props}
      css={[buttonStyle, variantStyle[variant], sizeStyle[size]]}
    >
      {props.children}
    </button>
  );
};

export default Button;
