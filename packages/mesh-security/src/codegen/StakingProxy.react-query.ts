/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { InstantiateMsg, ExecuteMsg, ExecMsg, Uint128, VoteOption, Decimal, Coin, WeightedVoteOption, QueryMsg, QueryMsg1, Addr, Config } from "./StakingProxy.types";
import { StakingProxyQueryClient, StakingProxyClient } from "./StakingProxy.client";
export interface StakingProxyReactQuery<TResponse, TData = TResponse> {
  client: StakingProxyQueryClient;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface StakingProxyConfigQuery<TData> extends StakingProxyReactQuery<Config, TData> {}
export function useStakingProxyConfigQuery<TData = Config>({
  client,
  options
}: StakingProxyConfigQuery<TData>) {
  return useQuery<Config, Error, TData>(["stakingProxyConfig", client.contractAddress], () => client.config(), options);
}
export interface StakingProxyReleaseUnbondedMutation {
  client: StakingProxyClient;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useStakingProxyReleaseUnbondedMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StakingProxyReleaseUnbondedMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, StakingProxyReleaseUnbondedMutation>(({
    client,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.releaseUnbonded(fee, memo, funds), options);
}
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
export function useStakingProxyUnstakeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StakingProxyUnstakeMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, StakingProxyUnstakeMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.unstake(msg, fee, memo, funds), options);
}
export interface StakingProxyWithdrawRewardsMutation {
  client: StakingProxyClient;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useStakingProxyWithdrawRewardsMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StakingProxyWithdrawRewardsMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, StakingProxyWithdrawRewardsMutation>(({
    client,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.withdrawRewards(fee, memo, funds), options);
}
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
export function useStakingProxyVoteWeightedMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StakingProxyVoteWeightedMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, StakingProxyVoteWeightedMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.voteWeighted(msg, fee, memo, funds), options);
}
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
export function useStakingProxyVoteMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StakingProxyVoteMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, StakingProxyVoteMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.vote(msg, fee, memo, funds), options);
}
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
export function useStakingProxyRestakeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StakingProxyRestakeMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, StakingProxyRestakeMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.restake(msg, fee, memo, funds), options);
}
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
export function useStakingProxyStakeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StakingProxyStakeMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, StakingProxyStakeMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.stake(msg, fee, memo, funds), options);
}