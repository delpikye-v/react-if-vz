import React from "react";
export type WrapperType = React.ElementType;
export type TypeWrapperProps = {
    wrapper?: React.ElementType;
    className?: string;
    style?: React.CSSProperties;
};
export type RenderableChildren = React.ReactNode | ((...args: unknown[]) => React.ReactNode);
