/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Decimal, InstantiateMsg, AuthorizedEndpoint, ExecuteMsg, CrossStakingApiExecMsg, Uint128, Binary, ExecMsg, Coin, AddValidator, QueryMsg, CrossStakingApiQueryMsg, QueryMsg1, MaybePendingRewards, AllPendingRewards, ValidatorPendingRewards, Tx, Addr, AllTxsResponse, ConfigResponse, IbcOrder, IbcChannelResponse, IbcChannel, IbcEndpoint, ListRemoteValidatorsResponse, MaxSlashResponse, Timestamp, Uint64, PointsAlignment, Uint256, Stake, PendingUnbond, StakesResponse, StakeInfo } from "./ExternalStaking.types";
import { ExternalStakingQueryClient, ExternalStakingClient } from "./ExternalStaking.client";
export interface ExternalStakingReactQuery<TResponse, TData = TResponse> {
  client: ExternalStakingQueryClient;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface ExternalStakingAllPendingRewardsQuery<TData> extends ExternalStakingReactQuery<AllPendingRewards, TData> {
  args: {
    limit?: number;
    startAfter?: string;
    user: string;
  };
}
export function useExternalStakingAllPendingRewardsQuery<TData = AllPendingRewards>({
  client,
  args,
  options
}: ExternalStakingAllPendingRewardsQuery<TData>) {
  return useQuery<AllPendingRewards, Error, TData>(["externalStakingAllPendingRewards", client.contractAddress, JSON.stringify(args)], () => client.allPendingRewards({
    limit: args.limit,
    startAfter: args.startAfter,
    user: args.user
  }), options);
}
export interface ExternalStakingPendingRewardsQuery<TData> extends ExternalStakingReactQuery<MaybePendingRewards, TData> {
  args: {
    user: string;
    validator: string;
  };
}
export function useExternalStakingPendingRewardsQuery<TData = MaybePendingRewards>({
  client,
  args,
  options
}: ExternalStakingPendingRewardsQuery<TData>) {
  return useQuery<MaybePendingRewards, Error, TData>(["externalStakingPendingRewards", client.contractAddress, JSON.stringify(args)], () => client.pendingRewards({
    user: args.user,
    validator: args.validator
  }), options);
}
export interface ExternalStakingAllPendingTxsDescQuery<TData> extends ExternalStakingReactQuery<AllTxsResponse, TData> {
  args: {
    limit?: number;
    startAfter?: number;
  };
}
export function useExternalStakingAllPendingTxsDescQuery<TData = AllTxsResponse>({
  client,
  args,
  options
}: ExternalStakingAllPendingTxsDescQuery<TData>) {
  return useQuery<AllTxsResponse, Error, TData>(["externalStakingAllPendingTxsDesc", client.contractAddress, JSON.stringify(args)], () => client.allPendingTxsDesc({
    limit: args.limit,
    startAfter: args.startAfter
  }), options);
}
export interface ExternalStakingPendingTxQuery<TData> extends ExternalStakingReactQuery<Tx, TData> {
  args: {
    txId: number;
  };
}
export function useExternalStakingPendingTxQuery<TData = Tx>({
  client,
  args,
  options
}: ExternalStakingPendingTxQuery<TData>) {
  return useQuery<Tx, Error, TData>(["externalStakingPendingTx", client.contractAddress, JSON.stringify(args)], () => client.pendingTx({
    txId: args.txId
  }), options);
}
export interface ExternalStakingStakesQuery<TData> extends ExternalStakingReactQuery<StakesResponse, TData> {
  args: {
    limit?: number;
    startAfter?: string;
    user: string;
  };
}
export function useExternalStakingStakesQuery<TData = StakesResponse>({
  client,
  args,
  options
}: ExternalStakingStakesQuery<TData>) {
  return useQuery<StakesResponse, Error, TData>(["externalStakingStakes", client.contractAddress, JSON.stringify(args)], () => client.stakes({
    limit: args.limit,
    startAfter: args.startAfter,
    user: args.user
  }), options);
}
export interface ExternalStakingStakeQuery<TData> extends ExternalStakingReactQuery<Stake, TData> {
  args: {
    user: string;
    validator: string;
  };
}
export function useExternalStakingStakeQuery<TData = Stake>({
  client,
  args,
  options
}: ExternalStakingStakeQuery<TData>) {
  return useQuery<Stake, Error, TData>(["externalStakingStake", client.contractAddress, JSON.stringify(args)], () => client.stake({
    user: args.user,
    validator: args.validator
  }), options);
}
export interface ExternalStakingListRemoteValidatorsQuery<TData> extends ExternalStakingReactQuery<ListRemoteValidatorsResponse, TData> {
  args: {
    limit?: number;
    startAfter?: string;
  };
}
export function useExternalStakingListRemoteValidatorsQuery<TData = ListRemoteValidatorsResponse>({
  client,
  args,
  options
}: ExternalStakingListRemoteValidatorsQuery<TData>) {
  return useQuery<ListRemoteValidatorsResponse, Error, TData>(["externalStakingListRemoteValidators", client.contractAddress, JSON.stringify(args)], () => client.listRemoteValidators({
    limit: args.limit,
    startAfter: args.startAfter
  }), options);
}
export interface ExternalStakingIbcChannelQuery<TData> extends ExternalStakingReactQuery<IbcChannelResponse, TData> {}
export function useExternalStakingIbcChannelQuery<TData = IbcChannelResponse>({
  client,
  options
}: ExternalStakingIbcChannelQuery<TData>) {
  return useQuery<IbcChannelResponse, Error, TData>(["externalStakingIbcChannel", client.contractAddress], () => client.ibcChannel(), options);
}
export interface ExternalStakingAuthorizedEndpointQuery<TData> extends ExternalStakingReactQuery<AuthorizedEndpoint, TData> {}
export function useExternalStakingAuthorizedEndpointQuery<TData = AuthorizedEndpoint>({
  client,
  options
}: ExternalStakingAuthorizedEndpointQuery<TData>) {
  return useQuery<AuthorizedEndpoint, Error, TData>(["externalStakingAuthorizedEndpoint", client.contractAddress], () => client.authorizedEndpoint(), options);
}
export interface ExternalStakingConfigQuery<TData> extends ExternalStakingReactQuery<ConfigResponse, TData> {}
export function useExternalStakingConfigQuery<TData = ConfigResponse>({
  client,
  options
}: ExternalStakingConfigQuery<TData>) {
  return useQuery<ConfigResponse, Error, TData>(["externalStakingConfig", client.contractAddress], () => client.config(), options);
}
export interface ExternalStakingMaxSlashQuery<TData> extends ExternalStakingReactQuery<MaxSlashResponse, TData> {}
export function useExternalStakingMaxSlashQuery<TData = MaxSlashResponse>({
  client,
  options
}: ExternalStakingMaxSlashQuery<TData>) {
  return useQuery<MaxSlashResponse, Error, TData>(["externalStakingMaxSlash", client.contractAddress], () => client.maxSlash(), options);
}
export interface ExternalStakingTestRollbackWithdrawRewardsMutation {
  client: ExternalStakingClient;
  msg: {
    txId: number;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useExternalStakingTestRollbackWithdrawRewardsMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ExternalStakingTestRollbackWithdrawRewardsMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ExternalStakingTestRollbackWithdrawRewardsMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.testRollbackWithdrawRewards(msg, fee, memo, funds), options);
}
export interface ExternalStakingTestCommitWithdrawRewardsMutation {
  client: ExternalStakingClient;
  msg: {
    txId: number;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useExternalStakingTestCommitWithdrawRewardsMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ExternalStakingTestCommitWithdrawRewardsMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ExternalStakingTestCommitWithdrawRewardsMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.testCommitWithdrawRewards(msg, fee, memo, funds), options);
}
export interface ExternalStakingWithdrawRewardsMutation {
  client: ExternalStakingClient;
  msg: {
    remoteRecipient: string;
    validator: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useExternalStakingWithdrawRewardsMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ExternalStakingWithdrawRewardsMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ExternalStakingWithdrawRewardsMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.withdrawRewards(msg, fee, memo, funds), options);
}
export interface ExternalStakingTestDistributeRewardsMutation {
  client: ExternalStakingClient;
  msg: {
    rewards: Coin;
    validator: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useExternalStakingTestDistributeRewardsMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ExternalStakingTestDistributeRewardsMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ExternalStakingTestDistributeRewardsMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.testDistributeRewards(msg, fee, memo, funds), options);
}
export interface ExternalStakingWithdrawUnbondedMutation {
  client: ExternalStakingClient;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useExternalStakingWithdrawUnbondedMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ExternalStakingWithdrawUnbondedMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ExternalStakingWithdrawUnbondedMutation>(({
    client,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.withdrawUnbonded(fee, memo, funds), options);
}
export interface ExternalStakingTestRollbackUnstakeMutation {
  client: ExternalStakingClient;
  msg: {
    txId: number;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useExternalStakingTestRollbackUnstakeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ExternalStakingTestRollbackUnstakeMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ExternalStakingTestRollbackUnstakeMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.testRollbackUnstake(msg, fee, memo, funds), options);
}
export interface ExternalStakingTestCommitUnstakeMutation {
  client: ExternalStakingClient;
  msg: {
    txId: number;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useExternalStakingTestCommitUnstakeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ExternalStakingTestCommitUnstakeMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ExternalStakingTestCommitUnstakeMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.testCommitUnstake(msg, fee, memo, funds), options);
}
export interface ExternalStakingUnstakeMutation {
  client: ExternalStakingClient;
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
export function useExternalStakingUnstakeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ExternalStakingUnstakeMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ExternalStakingUnstakeMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.unstake(msg, fee, memo, funds), options);
}
export interface ExternalStakingTestSetActiveValidatorMutation {
  client: ExternalStakingClient;
  msg: {
    validator: AddValidator;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useExternalStakingTestSetActiveValidatorMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ExternalStakingTestSetActiveValidatorMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ExternalStakingTestSetActiveValidatorMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.testSetActiveValidator(msg, fee, memo, funds), options);
}
export interface ExternalStakingTestRollbackStakeMutation {
  client: ExternalStakingClient;
  msg: {
    txId: number;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useExternalStakingTestRollbackStakeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ExternalStakingTestRollbackStakeMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ExternalStakingTestRollbackStakeMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.testRollbackStake(msg, fee, memo, funds), options);
}
export interface ExternalStakingTestCommitStakeMutation {
  client: ExternalStakingClient;
  msg: {
    txId: number;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useExternalStakingTestCommitStakeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ExternalStakingTestCommitStakeMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ExternalStakingTestCommitStakeMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.testCommitStake(msg, fee, memo, funds), options);
}
export interface ExternalStakingReceiveVirtualStakeMutation {
  client: ExternalStakingClient;
  msg: {
    amount: Coin;
    msg: Binary;
    owner: string;
    txId: number;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useExternalStakingReceiveVirtualStakeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ExternalStakingReceiveVirtualStakeMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ExternalStakingReceiveVirtualStakeMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.receiveVirtualStake(msg, fee, memo, funds), options);
}