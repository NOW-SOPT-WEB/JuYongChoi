import { css } from "@emotion/react";

export interface FlexStyleProps {
  position?:
    | "static"
    | "absolute"
    | "relative"
    | "fixed"
    | "sticky"
    | "inherit";

  wrap?: "nowrap" | "wrap" | "wrap-reverse" | "inherit" | "initial";
  basis?: 0 | "auto" | "200px";
  grow?: string;
  shrink?: string;

  direction?: "row" | "column";

  align?:
    | "normal"
    | "normal"
    | "stretch"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "self-start"
    | "self-end"
    | "baseline"
    | "inherit"
    | "initial"
    | "unset";
  justify?:
    | "center"
    | "start"
    | "flex-start"
    | "end"
    | "flex-end"
    | "left"
    | "right"
    | "normal"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch"
    | "inherit"
    | "initial"
    | "revert"
    | "unset";
  gap?: string;

  width?: string;
  height?: string;

  margin?: string;
  marginRight?: string;
  marginTop?: string;
  marginLeft?: string;
  marginBottom?: string;
  padding?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
}

export const getFlexStyle = ({
  position = "static",
  wrap = "nowrap",
  basis = "auto",
  grow = "1",
  shrink = "0",
  direction = "row",
  align = "flex-start",
  justify = "flex-start",
  gap = "0px",
  width = "",
  height = "",
  margin = "0",
  marginRight = "",
  marginTop = "",
  marginLeft = "",
  marginBottom = "",
  padding = "",
  paddingTop = "",
  paddingRight = "",
  paddingBottom = "",
  paddingLeft = "",
}: FlexStyleProps) =>
  css({
    display: "flex",
    position,
    flexWrap: wrap,
    flexBasis: basis,
    flexGrow: grow,
    flexShrink: shrink,
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    gap,
    width,
    height,
    margin,
    marginRight,
    marginLeft,
    marginTop,
    marginBottom,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
  });
