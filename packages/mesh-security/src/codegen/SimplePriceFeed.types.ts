/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Decimal = string;
export interface InstantiateMsg {
  native_per_foreign: Decimal;
  owner?: string | null;
  [k: string]: unknown;
}
export type ExecuteMsg = PriceFeedApiExecMsg | ExecMsg;
export type PriceFeedApiExecMsg = string;
export type ExecMsg = {
  update_price: {
    native_per_foreign: Decimal;
    [k: string]: unknown;
  };
};
export type QueryMsg = PriceFeedApiQueryMsg | QueryMsg1;
export type PriceFeedApiQueryMsg = {
  price: {
    [k: string]: unknown;
  };
};
export type QueryMsg1 = {
  config: {
    [k: string]: unknown;
  };
};
export interface ConfigResponse {
  native_per_foreign: Decimal;
  owner: string;
}
export interface PriceResponse {
  native_per_foreign: Decimal;
}