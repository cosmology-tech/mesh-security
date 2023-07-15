/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Decimal = string;
export interface InstantiateMsg {
  denom: string;
  max_slashing: Decimal;
  proxy_code_id: number;
  [k: string]: unknown;
}
export type ExecuteMsg = LocalStakingApiExecMsg | NativeStakingCallbackExecMsg | ExecMsg;
export type LocalStakingApiExecMsg = {
  receive_stake: {
    msg: Binary;
    owner: string;
    [k: string]: unknown;
  };
};
export type Binary = string;
export type NativeStakingCallbackExecMsg = {
  release_proxy_stake: {
    [k: string]: unknown;
  };
};
export type ExecMsg = string;
export type QueryMsg = LocalStakingApiQueryMsg | NativeStakingCallbackQueryMsg | QueryMsg1;
export type LocalStakingApiQueryMsg = {
  max_slash: {
    [k: string]: unknown;
  };
};
export type NativeStakingCallbackQueryMsg = string;
export type QueryMsg1 = {
  config: {
    [k: string]: unknown;
  };
} | {
  proxy_by_owner: {
    owner: string;
    [k: string]: unknown;
  };
} | {
  owner_by_proxy: {
    proxy: string;
    [k: string]: unknown;
  };
};
export type Addr = string;
export interface Config {
  denom: string;
  max_slashing: Decimal;
  proxy_code_id: number;
  vault: Addr;
}
export interface MaxSlashResponse {
  max_slash: Decimal;
}
export interface OwnerByProxyResponse {
  owner: string;
}
export interface ProxyByOwnerResponse {
  proxy: string;
}