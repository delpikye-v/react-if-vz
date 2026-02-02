import React from "react";
export type WrapperType = React.ElementType;
export type RenderableChildren = React.ReactNode | ((...args: unknown[]) => React.ReactNode);
