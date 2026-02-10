import { ReactNode } from "react";
import { TypeWrapperProps } from "./types";
export type IfzLogger = (msg: string, meta?: any) => void;
export declare function defaultLogger(msg: string, meta?: any): void;
export declare const isDev: boolean;
export declare function wrapper(node: ReactNode, p: TypeWrapperProps): ReactNode;
