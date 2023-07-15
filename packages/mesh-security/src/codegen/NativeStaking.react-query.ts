/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee, Coin } from "@cosmjs/amino";
import { Decimal, InstantiateMsg, ExecuteMsg, LocalStakingApiExecMsg, Binary, NativeStakingCallbackExecMsg, ExecMsg, QueryMsg, LocalStakingApiQueryMsg, NativeStakingCallbackQueryMsg, QueryMsg1, Addr, Config, MaxSlashResponse, OwnerByProxyResponse, ProxyByOwnerResponse } from "./NativeStaking.types";
import { NativeStakingQueryClient, NativeStakingClient } from "./NativeStaking.client";
export interface NativeStakingReactQuery<TResponse, TData = TResponse> {
  client: NativeStakingQueryClient;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface NativeStakingOwnerByProxyQuery<TData> extends NativeStakingReactQuery<OwnerByProxyResponse, TData> {
  args: {
    proxy: string;
  };
}
export function useNativeStakingOwnerByProxyQuery<TData = OwnerByProxyResponse>({
  client,
  args,
  options
}: NativeStakingOwnerByProxyQuery<TData>) {
  return useQuery<OwnerByProxyResponse, Error, TData>(["nativeStakingOwnerByProxy", client.contractAddress, JSON.stringify(args)], () => client.ownerByProxy({
    proxy: args.proxy
  }), options);
}
export interface NativeStakingProxyByOwnerQuery<TData> extends NativeStakingReactQuery<ProxyByOwnerResponse, TData> {
  args: {
    owner: string;
  };
}
export function useNativeStakingProxyByOwnerQuery<TData = ProxyByOwnerResponse>({
  client,
  args,
  options
}: NativeStakingProxyByOwnerQuery<TData>) {
  return useQuery<ProxyByOwnerResponse, Error, TData>(["nativeStakingProxyByOwner", client.contractAddress, JSON.stringify(args)], () => client.proxyByOwner({
    owner: args.owner
  }), options);
}
export interface NativeStakingConfigQuery<TData> extends NativeStakingReactQuery<Config, TData> {}
export function useNativeStakingConfigQuery<TData = Config>({
  client,
  options
}: NativeStakingConfigQuery<TData>) {
  return useQuery<Config, Error, TData>(["nativeStakingConfig", client.contractAddress], () => client.config(), options);
}
export interface NativeStakingMaxSlashQuery<TData> extends NativeStakingReactQuery<MaxSlashResponse, TData> {}
export function useNativeStakingMaxSlashQuery<TData = MaxSlashResponse>({
  client,
  options
}: NativeStakingMaxSlashQuery<TData>) {
  return useQuery<MaxSlashResponse, Error, TData>(["nativeStakingMaxSlash", client.contractAddress], () => client.maxSlash(), options);
}
export interface NativeStakingReleaseProxyStakeMutation {
  client: NativeStakingClient;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useNativeStakingReleaseProxyStakeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, NativeStakingReleaseProxyStakeMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, NativeStakingReleaseProxyStakeMutation>(({
    client,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.releaseProxyStake(fee, memo, funds), options);
}
export interface NativeStakingReceiveStakeMutation {
  client: NativeStakingClient;
  msg: {
    msg: Binary;
    owner: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useNativeStakingReceiveStakeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, NativeStakingReceiveStakeMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, NativeStakingReceiveStakeMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.receiveStake(msg, fee, memo, funds), options);
}