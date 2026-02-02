import React, { ReactNode } from "react";
import { WrapperType } from "./types";
/**
 * T = type of switch value
 */
export type TypeSwitchProps<T = any> = {
    value?: (() => T) | T;
    children: ReactNode;
    args?: unknown[];
};
export type TypeCaseProps<T = any> = {
    value: (() => T) | T;
    children?: ReactNode | ((...args: unknown[]) => ReactNode);
    args?: unknown[];
    className?: string;
    style?: React.CSSProperties;
    wrapper?: WrapperType;
    debug?: string;
};
export type TypeDefaultProps = {
    children?: ReactNode | ((...args: unknown[]) => ReactNode);
    args?: unknown[];
    className?: string;
    style?: React.CSSProperties;
    wrapper?: WrapperType;
};
export declare function execSwitchCondition<T>(condition: T | ((...args: unknown[]) => T), args?: unknown[]): T;
export declare function Switch<T = any>({ value, children, args, }: TypeSwitchProps<T>): React.JSX.Element;
export declare namespace Switch {
    var Case: typeof import("./SwitchCase").Case;
    var Default: typeof import("./SwitchCase").Default;
}
export declare function Case<T = any>(props: TypeCaseProps<T>): React.JSX.Element;
export declare function Default(props: TypeDefaultProps): React.JSX.Element;
