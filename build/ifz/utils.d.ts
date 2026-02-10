import React, { ReactNode } from "react";
import { TypeWrapperProps } from "./types";
export type IfzLogger = (msg: string, meta?: any) => void;
export declare const noop: () => void;
export declare const defaultLogger: IfzLogger;
export declare const isDev: boolean;
export declare const wrapper: (node: ReactNode, p: TypeWrapperProps) => React.ReactNode;
