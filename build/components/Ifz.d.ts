import React, { ReactNode, ReactElement } from "react";
export type TypeBooleanResult = boolean | string | number | null | undefined;
type TypeConditionalProps = {
    condition?: (() => TypeBooleanResult) | TypeBooleanResult;
    children: ReactNode;
};
type TypeIfzProps = {
    children: ReactNode;
};
export declare function If(_: TypeConditionalProps): any;
export declare function ElseIf(_: TypeConditionalProps): any;
export declare function Else(_: {
    children: ReactNode;
}): any;
export declare function execIfCondition(condition: TypeBooleanResult | ((...args: unknown[]) => TypeBooleanResult)): boolean;
export declare function Ifz({ children }: TypeIfzProps): ReactElement | null;
export declare namespace Ifz {
    var If: typeof import("./Ifz").If;
    var ElseIf: typeof import("./Ifz").ElseIf;
    var Else: typeof import("./Ifz").Else;
}
export declare const When: React.FC<TypeConditionalProps>;
export {};
