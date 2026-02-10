import React, { ReactNode } from "react";
import { IfzChain } from "./IfzChain";
import { IfzLogger } from "./utils";
import { WrapperType } from "./types";
export declare const IfzConfig: {
    logger: IfzLogger;
    trace: boolean;
};
export declare function configureIfz(opts: {
    logger?: IfzLogger;
    trace?: boolean;
}): void;
export type TypeBooleanResult = boolean | string | number | null | undefined;
export type TypeConditionalProps<TArgs extends unknown[] = unknown[]> = {
    condition?: ((...args: TArgs) => TypeBooleanResult) | TypeBooleanResult;
    children?: ReactNode | ((...args: TArgs) => ReactNode);
    args?: TArgs;
    className?: string;
    style?: React.CSSProperties;
    wrapper?: WrapperType;
    debug?: string;
};
type TypeIfzProps = {
    children?: ReactNode;
};
export declare function If<TArgs extends unknown[] = unknown[]>(_: TypeConditionalProps<TArgs>): any;
export declare function ElseIf<TArgs extends unknown[] = unknown[]>(_: TypeConditionalProps<TArgs>): any;
export declare function Else({ children, }: {
    children?: ReactNode | ((...args: unknown[]) => ReactNode);
}): any;
export declare function ElseIfz({ children }: {
    children?: ReactNode;
}): any;
export declare function execIfCondition<TArgs extends unknown[]>(condition: TypeBooleanResult | ((...args: TArgs) => TypeBooleanResult), args: TArgs): boolean;
export declare function Ifz({ children }: TypeIfzProps): React.JSX.Element;
export declare namespace Ifz {
    var If: typeof import("./Ifz").If;
    var ElseIf: typeof import("./Ifz").ElseIf;
    var Else: typeof import("./Ifz").Else;
    var ElseIfz: typeof import("./Ifz").ElseIfz;
    var chain: (opts?: {
        logger?: IfzLogger;
        trace?: boolean;
    }) => IfzChain;
}
type InferArgs<T> = T extends (...args: infer A) => any ? A : unknown[];
export declare function When<TCond extends (...args: any[]) => any>({ condition, children, args, }: {
    condition: TCond | TypeBooleanResult;
    children?: ReactNode | ((...args: InferArgs<TCond>) => ReactNode);
    args?: InferArgs<TCond>;
}): React.JSX.Element;
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
