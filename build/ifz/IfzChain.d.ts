import React, { ReactNode } from "react";
import { TypeBooleanResult } from "./Ifz";
import { IfzLogger } from "./utils";
export declare class IfzChain {
    private entries;
    private fallback;
    private logger;
    private traced;
    constructor(logger?: IfzLogger, trace?: boolean);
    when(condition: (() => TypeBooleanResult) | TypeBooleanResult, node: ReactNode): this;
    else(node: ReactNode): React.ReactNode;
    private exec;
    render(): ReactNode;
}
