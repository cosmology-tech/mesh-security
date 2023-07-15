/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { UseQueryOptions, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { RewardInfo, Coin, ConfigResponse } from "./Converter.types";
import { ConverterQueryClient, ConverterClient } from "./Converter.client";
export interface ConverterReactQuery<TResponse, TData = TResponse> {
    client: ConverterQueryClient;
    options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
        initialData?: undefined;
    };
}
export interface ConverterConfigQuery<TData> extends ConverterReactQuery<ConfigResponse, TData> {
}
export declare function useConverterConfigQuery<TData = ConfigResponse>({ client, options }: ConverterConfigQuery<TData>): any;
export interface ConverterTestUnstakeMutation {
    client: ConverterClient;
    msg: {
        unstake: Coin;
        validator: string;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useConverterTestUnstakeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ConverterTestUnstakeMutation>, "mutationFn">): any;
export interface ConverterTestStakeMutation {
    client: ConverterClient;
    msg: {
        stake: Coin;
        validator: string;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useConverterTestStakeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ConverterTestStakeMutation>, "mutationFn">): any;
export interface ConverterDistributeRewardsMutation {
    client: ConverterClient;
    msg: {
        payments: RewardInfo[];
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useConverterDistributeRewardsMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ConverterDistributeRewardsMutation>, "mutationFn">): any;
export interface ConverterDistributeRewardMutation {
    client: ConverterClient;
    msg: {
        validator: string;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useConverterDistributeRewardMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ConverterDistributeRewardMutation>, "mutationFn">): any;
