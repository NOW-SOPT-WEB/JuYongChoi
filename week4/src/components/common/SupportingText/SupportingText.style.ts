import { css } from "@emotion/react";

import { Theme } from "@styles/theme";

import { SupportingTextProps } from "./SupportingText";

export const getTextStyle = (
  isError: Required<SupportingTextProps>["isError"]
) =>
  css({
    fontSize: Theme.text.xSmall.fontSize,
    lineHeight: Theme.text.xSmall.lineHeight,

    color: isError ? Theme.color.red300 : Theme.color.gray600,
    fontWeight: 600,

    minHeight: Theme.text.xSmall.lineHeight,
  });
