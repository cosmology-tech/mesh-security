/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee, Coin } from "@cosmjs/amino";
import { Decimal, InstantiateMsg, ExecuteMsg, PriceFeedApiExecMsg, ExecMsg, QueryMsg, PriceFeedApiQueryMsg, QueryMsg1, ConfigResponse, PriceResponse } from "./SimplePriceFeed.types";
import { SimplePriceFeedQueryClient, SimplePriceFeedClient } from "./SimplePriceFeed.client";
export interface SimplePriceFeedReactQuery<TResponse, TData = TResponse> {
  client: SimplePriceFeedQueryClient;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface SimplePriceFeedConfigQuery<TData> extends SimplePriceFeedReactQuery<ConfigResponse, TData> {}
export function useSimplePriceFeedConfigQuery<TData = ConfigResponse>({
  client,
  options
}: SimplePriceFeedConfigQuery<TData>) {
  return useQuery<ConfigResponse, Error, TData>(["simplePriceFeedConfig", client.contractAddress], () => client.config(), options);
}
export interface SimplePriceFeedPriceQuery<TData> extends SimplePriceFeedReactQuery<PriceResponse, TData> {}
export function useSimplePriceFeedPriceQuery<TData = PriceResponse>({
  client,
  options
}: SimplePriceFeedPriceQuery<TData>) {
  return useQuery<PriceResponse, Error, TData>(["simplePriceFeedPrice", client.contractAddress], () => client.price(), options);
}
export interface SimplePriceFeedUpdatePriceMutation {
  client: SimplePriceFeedClient;
  msg: {
    nativePerForeign: Decimal;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useSimplePriceFeedUpdatePriceMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, SimplePriceFeedUpdatePriceMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, SimplePriceFeedUpdatePriceMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updatePrice(msg, fee, memo, funds), options);
}