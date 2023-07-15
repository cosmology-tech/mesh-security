/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { VoteOption, Coin, WeightedVoteOption, Config } from "./StakingProxy.types";
export interface StakingProxyReadOnlyInterface {
    contractAddress: string;
    config: () => Promise<Config>;
}
export declare class StakingProxyQueryClient implements StakingProxyReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    config: () => Promise<Config>;
}
export interface StakingProxyInterface extends StakingProxyReadOnlyInterface {
    contractAddress: string;
    sender: string;
    stake: ({ validator }: {
        validator: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    restake: ({ amount, dstValidator, srcValidator }: {
        amount: Coin;
        dstValidator: string;
        srcValidator: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    vote: ({ proposalId, vote }: {
        proposalId: number;
        vote: VoteOption;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    voteWeighted: ({ proposalId, vote }: {
        proposalId: number;
        vote: WeightedVoteOption[];
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    withdrawRewards: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    unstake: ({ amount, validator }: {
        amount: Coin;
        validator: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    releaseUnbonded: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class StakingProxyClient extends StakingProxyQueryClient implements StakingProxyInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    stake: ({ validator }: {
        validator: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    restake: ({ amount, dstValidator, srcValidator }: {
        amount: Coin;
        dstValidator: string;
        srcValidator: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    vote: ({ proposalId, vote }: {
        proposalId: number;
        vote: VoteOption;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    voteWeighted: ({ proposalId, vote }: {
        proposalId: number;
        vote: WeightedVoteOption[];
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    withdrawRewards: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    unstake: ({ amount, validator }: {
        amount: Coin;
        validator: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    releaseUnbonded: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}