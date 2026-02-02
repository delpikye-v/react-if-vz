import React from "react";
import { TypeBooleanResult } from "./Ifz";
import { IfzLogger } from "./utils";
export declare function useIfz(args?: unknown[], opts?: {
    logger?: IfzLogger;
    trace?: boolean;
}): {
    when: (condition: (() => TypeBooleanResult) | TypeBooleanResult, node: React.ReactNode) => any;
    else: (fallback: React.ReactNode) => React.ReactNode;
    otherwise: (fallback: React.ReactNode) => React.ReactNode;
};
