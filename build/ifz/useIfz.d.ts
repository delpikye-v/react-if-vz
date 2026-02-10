import React from "react";
import { TypeBooleanResult } from "./Ifz";
import { IfzLogger } from "./utils";
type TypeCondition<TArgs extends unknown[] = unknown[]> = TypeBooleanResult | ((...args: TArgs) => TypeBooleanResult);
export declare function useIfz<TArgs extends unknown[] = unknown[]>(args?: TArgs, opts?: {
    logger?: IfzLogger;
    trace?: boolean;
}): {
    when: (condition: TypeCondition<TArgs>, node: React.ReactNode) => any;
    else: (fallback: React.ReactNode) => React.ReactNode;
    otherwise: (fallback: React.ReactNode) => React.ReactNode;
};
export {};
