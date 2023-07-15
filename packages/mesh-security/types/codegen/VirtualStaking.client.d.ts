/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Coin, ConfigResponse } from "./VirtualStaking.types";
export interface VirtualStakingReadOnlyInterface {
    contractAddress: string;
    config: () => Promise<ConfigResponse>;
}
export declare class VirtualStakingQueryClient implements VirtualStakingReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    config: () => Promise<ConfigResponse>;
}
export interface VirtualStakingInterface extends VirtualStakingReadOnlyInterface {
    contractAddress: string;
    sender: string;
    bond: ({ amount, validator }: {
        amount: Coin;
        validator: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    unbond: ({ amount, validator }: {
        amount: Coin;
        validator: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class VirtualStakingClient extends VirtualStakingQueryClient implements VirtualStakingInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    bond: ({ amount, validator }: {
        amount: Coin;
        validator: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    unbond: ({ amount, validator }: {
        amount: Coin;
        validator: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
