import React from "react";

type Props = {
  maxWidth: number;
  minWidth?: number;
  className?: string;
};
const FlexboxSpacer = ({ maxWidth, minWidth = 0, className = "" }: Props) => {
  return (
    <div
      className={`invisible shrink-[10000] grow ${className}`}
      style={{ maxWidth: `${maxWidth}px`, minWidth: `${minWidth}px` }}
    ></div>
  );
};

export default FlexboxSpacer;
