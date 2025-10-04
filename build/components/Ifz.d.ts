import React, { ReactNode, ReactElement } from "react";
export type TypeBooleanResult = boolean | string | number | null | undefined;
type TypeConditionalProps = {
    condition?: ((...args: any[]) => TypeBooleanResult) | TypeBooleanResult;
    children?: ReactNode | ((...args: any[]) => ReactNode);
    args?: unknown[];
    className?: string;
    style?: React.CSSProperties;
    debug?: string;
};
type TypeIfzProps = {
    children?: ReactNode;
};
export declare function If(_: TypeConditionalProps): any;
export declare function ElseIf(_: TypeConditionalProps): any;
export declare function Else({ children }: {
    children?: ReactNode | ((...args: unknown[]) => ReactNode);
}): any;
export declare function execIfCondition(condition: TypeBooleanResult | ((...args: unknown[]) => TypeBooleanResult), args?: unknown[]): boolean;
export declare function Ifz({ children }: TypeIfzProps): ReactElement | null;
export declare namespace Ifz {
    var If: typeof import("./Ifz").If;
    var ElseIf: typeof import("./Ifz").ElseIf;
    var Else: typeof import("./Ifz").Else;
}
export declare const ElseIfz: typeof Ifz;
export declare const When: React.FC<TypeConditionalProps>;
export declare const WhenAll: React.FC<{
    conditions: boolean[];
    children: ReactNode;
}>;
export declare const WhenAny: React.FC<{
    conditions: boolean[];
    children: ReactNode;
}>;
export declare const WhenNot: React.FC<{
    condition: boolean;
    children: ReactNode;
}>;
export {};
