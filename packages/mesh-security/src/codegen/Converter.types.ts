/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Decimal = string;
export interface InstantiateMsg {
  admin?: string | null;
  discount: Decimal;
  price_feed: string;
  remote_denom: string;
  virtual_staking_code_id: number;
  [k: string]: unknown;
}
export type ExecuteMsg = ConverterApiExecMsg | ExecMsg;
export type ConverterApiExecMsg = {
  distribute_reward: {
    validator: string;
    [k: string]: unknown;
  };
} | {
  distribute_rewards: {
    payments: RewardInfo[];
    [k: string]: unknown;
  };
};
export type Uint128 = string;
export type ExecMsg = {
  test_stake: {
    stake: Coin;
    validator: string;
    [k: string]: unknown;
  };
} | {
  test_unstake: {
    unstake: Coin;
    validator: string;
    [k: string]: unknown;
  };
};
export interface RewardInfo {
  reward: Uint128;
  validator: string;
}
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
export type QueryMsg = ConverterApiQueryMsg | QueryMsg1;
export type ConverterApiQueryMsg = string;
export type QueryMsg1 = {
  config: {
    [k: string]: unknown;
  };
};
export interface ConfigResponse {
  adjustment: Decimal;
  price_feed: string;
  virtual_staking: string;
}