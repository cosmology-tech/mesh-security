/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { UseQueryOptions, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Binary, Coin, MaybeAccountResponse, AccountClaimsResponse, AllAccountsResponse, Tx, AllTxsResponse, Lien, ConfigResponse } from "./Vault.types";
import { VaultQueryClient, VaultClient } from "./Vault.client";
export interface VaultReactQuery<TResponse, TData = TResponse> {
    client: VaultQueryClient;
    options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
        initialData?: undefined;
    };
}
export interface VaultAllPendingTxsDescQuery<TData> extends VaultReactQuery<AllTxsResponse, TData> {
    args: {
        limit?: number;
        startAfter?: number;
    };
}
export declare function useVaultAllPendingTxsDescQuery<TData = AllTxsResponse>({ client, args, options }: VaultAllPendingTxsDescQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface VaultPendingTxQuery<TData> extends VaultReactQuery<Tx, TData> {
    args: {
        txId: number;
    };
}
export declare function useVaultPendingTxQuery<TData = Tx>({ client, args, options }: VaultPendingTxQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface VaultAllAccountsQuery<TData> extends VaultReactQuery<AllAccountsResponse, TData> {
    args: {
        limit?: number;
        startAfter?: string;
        withCollateral: boolean;
    };
}
export declare function useVaultAllAccountsQuery<TData = AllAccountsResponse>({ client, args, options }: VaultAllAccountsQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface VaultAccountClaimsQuery<TData> extends VaultReactQuery<AccountClaimsResponse, TData> {
    args: {
        account: string;
        limit?: number;
        startAfter?: string;
    };
}
export declare function useVaultAccountClaimsQuery<TData = AccountClaimsResponse>({ client, args, options }: VaultAccountClaimsQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface VaultClaimQuery<TData> extends VaultReactQuery<Lien, TData> {
    args: {
        account: string;
        lienholder: string;
    };
}
export declare function useVaultClaimQuery<TData = Lien>({ client, args, options }: VaultClaimQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface VaultConfigQuery<TData> extends VaultReactQuery<ConfigResponse, TData> {
}
export declare function useVaultConfigQuery<TData = ConfigResponse>({ client, options }: VaultConfigQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface VaultAccountQuery<TData> extends VaultReactQuery<MaybeAccountResponse, TData> {
    args: {
        account: string;
    };
}
export declare function useVaultAccountQuery<TData = MaybeAccountResponse>({ client, args, options }: VaultAccountQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface VaultStakeLocalMutation {
    client: VaultClient;
    msg: {
        amount: Coin;
        msg: Binary;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useVaultStakeLocalMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, VaultStakeLocalMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, VaultStakeLocalMutation, unknown>;
export interface VaultStakeRemoteMutation {
    client: VaultClient;
    msg: {
        amount: Coin;
        contract: string;
        msg: Binary;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useVaultStakeRemoteMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, VaultStakeRemoteMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, VaultStakeRemoteMutation, unknown>;
export interface VaultUnbondMutation {
    client: VaultClient;
    msg: {
        amount: Coin;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useVaultUnbondMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, VaultUnbondMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, VaultUnbondMutation, unknown>;
export interface VaultBondMutation {
    client: VaultClient;
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useVaultBondMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, VaultBondMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, VaultBondMutation, unknown>;
export interface VaultRollbackTxMutation {
    client: VaultClient;
    msg: {
        txId: number;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useVaultRollbackTxMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, VaultRollbackTxMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, VaultRollbackTxMutation, unknown>;
export interface VaultCommitTxMutation {
    client: VaultClient;
    msg: {
        txId: number;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useVaultCommitTxMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, VaultCommitTxMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, VaultCommitTxMutation, unknown>;
export interface VaultReleaseLocalStakeMutation {
    client: VaultClient;
    msg: {
        owner: string;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useVaultReleaseLocalStakeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, VaultReleaseLocalStakeMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, VaultReleaseLocalStakeMutation, unknown>;
export interface VaultReleaseCrossStakeMutation {
    client: VaultClient;
    msg: {
        amount: Coin;
        owner: string;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useVaultReleaseCrossStakeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, VaultReleaseCrossStakeMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, VaultReleaseCrossStakeMutation, unknown>;
