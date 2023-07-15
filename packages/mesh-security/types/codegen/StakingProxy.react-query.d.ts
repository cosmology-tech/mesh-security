/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { UseQueryOptions, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { VoteOption, Coin, WeightedVoteOption, Config } from "./StakingProxy.types";
import { StakingProxyQueryClient, StakingProxyClient } from "./StakingProxy.client";
export interface StakingProxyReactQuery<TResponse, TData = TResponse> {
    client: StakingProxyQueryClient;
    options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
        initialData?: undefined;
    };
}
export interface StakingProxyConfigQuery<TData> extends StakingProxyReactQuery<Config, TData> {
}
export declare function useStakingProxyConfigQuery<TData = Config>({ client, options }: StakingProxyConfigQuery<TData>): any;
export interface StakingProxyReleaseUnbondedMutation {
    client: StakingProxyClient;
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useStakingProxyReleaseUnbondedMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StakingProxyReleaseUnbondedMutation>, "mutationFn">): any;
export interface StakingProxyUnstakeMutation {
    client: StakingProxyClient;
    msg: {
        amount: Coin;
        validator: string;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useStakingProxyUnstakeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StakingProxyUnstakeMutation>, "mutationFn">): any;
export interface StakingProxyWithdrawRewardsMutation {
    client: StakingProxyClient;
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useStakingProxyWithdrawRewardsMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StakingProxyWithdrawRewardsMutation>, "mutationFn">): any;
export interface StakingProxyVoteWeightedMutation {
    client: StakingProxyClient;
    msg: {
        proposalId: number;
        vote: WeightedVoteOption[];
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useStakingProxyVoteWeightedMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StakingProxyVoteWeightedMutation>, "mutationFn">): any;
export interface StakingProxyVoteMutation {
    client: StakingProxyClient;
    msg: {
        proposalId: number;
        vote: VoteOption;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useStakingProxyVoteMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StakingProxyVoteMutation>, "mutationFn">): any;
export interface StakingProxyRestakeMutation {
    client: StakingProxyClient;
    msg: {
        amount: Coin;
        dstValidator: string;
        srcValidator: string;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useStakingProxyRestakeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StakingProxyRestakeMutation>, "mutationFn">): any;
export interface StakingProxyStakeMutation {
    client: StakingProxyClient;
    msg: {
        validator: string;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useStakingProxyStakeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StakingProxyStakeMutation>, "mutationFn">): any;