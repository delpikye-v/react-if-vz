import React, { ReactNode } from "react";
import { TypeBooleanResult } from "./Ifz";
import { IfzLogger } from "./utils";
type TypeChainEntry = {
    condition?: TypeBooleanResult | (() => TypeBooleanResult);
    node: ReactNode;
};
export declare class IfzChain {
    private logger;
    private traced;
    private entries;
    private fallback;
    constructor(logger?: IfzLogger, traced?: boolean);
    when(condition: TypeChainEntry["condition"], node: ReactNode): this;
    else(node: ReactNode): React.ReactNode;
    render(): ReactNode;
}
export {};
