/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
export interface InstantiateMsg {
    [k: string]: unknown;
}
export declare type ExecuteMsg = VirtualStakingApiExecMsg | ExecMsg;
export declare type VirtualStakingApiExecMsg = {
    bond: {
        amount: Coin;
        validator: string;
        [k: string]: unknown;
    };
} | {
    unbond: {
        amount: Coin;
        validator: string;
        [k: string]: unknown;
    };
};
export declare type Uint128 = string;
export declare type ExecMsg = string;
export interface Coin {
    amount: Uint128;
    denom: string;
    [k: string]: unknown;
}
export declare type QueryMsg = VirtualStakingApiQueryMsg | QueryMsg1;
export declare type VirtualStakingApiQueryMsg = string;
export declare type QueryMsg1 = {
    config: {
        [k: string]: unknown;
    };
};
export interface ConfigResponse {
    converter: string;
    denom: string;
}
