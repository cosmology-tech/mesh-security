/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { RewardInfo, Coin, ConfigResponse } from "./Converter.types";
export interface ConverterReadOnlyInterface {
    contractAddress: string;
    config: () => Promise<ConfigResponse>;
}
export declare class ConverterQueryClient implements ConverterReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    config: () => Promise<ConfigResponse>;
}
export interface ConverterInterface extends ConverterReadOnlyInterface {
    contractAddress: string;
    sender: string;
    distributeReward: ({ validator }: {
        validator: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    distributeRewards: ({ payments }: {
        payments: RewardInfo[];
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    testStake: ({ stake, validator }: {
        stake: Coin;
        validator: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    testUnstake: ({ unstake, validator }: {
        unstake: Coin;
        validator: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class ConverterClient extends ConverterQueryClient implements ConverterInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    distributeReward: ({ validator }: {
        validator: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    distributeRewards: ({ payments }: {
        payments: RewardInfo[];
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    testStake: ({ stake, validator }: {
        stake: Coin;
        validator: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    testUnstake: ({ unstake, validator }: {
        unstake: Coin;
        validator: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
