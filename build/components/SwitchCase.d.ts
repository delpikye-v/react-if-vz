import { ReactNode } from "react";
import { TypeBooleanResult } from "./Ifz";
type TypeSwitchProps = {
    value?: (() => TypeBooleanResult) | TypeBooleanResult;
    children: ReactNode;
};
type TypeCaseProps = {
    value: (() => TypeBooleanResult) | TypeBooleanResult;
    children: ReactNode;
};
type TypeDefaultProps = {
    children: ReactNode;
};
export declare function execSwitchCondition(condition: TypeBooleanResult | ((...args: unknown[]) => TypeBooleanResult)): TypeBooleanResult;
export declare function Case({ children }: TypeCaseProps): JSX.Element;
export declare function Default({ children }: TypeDefaultProps): JSX.Element;
export declare function Switch({ value, children }: TypeSwitchProps): JSX.Element;
export declare namespace Switch {
    var Case: typeof import("./SwitchCase").Case;
    var Default: typeof import("./SwitchCase").Default;
}
export {};
