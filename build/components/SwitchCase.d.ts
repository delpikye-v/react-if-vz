import React, { ReactNode } from "react";
import { TypeBooleanResult } from "./Ifz";
type TypeSwitchProps = {
    value?: (() => TypeBooleanResult) | TypeBooleanResult;
    children: ReactNode;
    args?: unknown[];
};
type TypeCaseProps = {
    value: (() => TypeBooleanResult) | TypeBooleanResult;
    children?: ReactNode | ((...args: unknown[]) => ReactNode);
    args?: unknown[];
    className?: string;
    style?: React.CSSProperties;
    debug?: string;
};
type TypeDefaultProps = {
    children?: ReactNode | ((...args: unknown[]) => ReactNode);
    args?: unknown[];
    className?: string;
    style?: React.CSSProperties;
};
export declare function execSwitchCondition(condition: TypeBooleanResult | ((...args: unknown[]) => TypeBooleanResult), args?: unknown[]): TypeBooleanResult;
export declare function Case({ children }: TypeCaseProps): any;
export declare function Default({ children }: TypeDefaultProps): any;
export declare function Switch({ value, children, args }: TypeSwitchProps): any;
export declare namespace Switch {
    var Case: typeof import("./SwitchCase").Case;
    var Default: typeof import("./SwitchCase").Default;
}
export {};
