/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "@cosmjs/cosmwasm-stargate";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { Decimal, InstantiateMsg, ExecuteMsg, PriceFeedApiExecMsg, ExecMsg, QueryMsg, PriceFeedApiQueryMsg, QueryMsg1, ConfigResponse, PriceResponse } from "./SimplePriceFeed.types";
export interface SimplePriceFeedMessage {
  contractAddress: string;
  sender: string;
  updatePrice: ({
    nativePerForeign
  }: {
    nativePerForeign: Decimal;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class SimplePriceFeedMessageComposer implements SimplePriceFeedMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.updatePrice = this.updatePrice.bind(this);
  }

  updatePrice = ({
    nativePerForeign
  }: {
    nativePerForeign: Decimal;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_price: {
            native_per_foreign: nativePerForeign
          }
        })),
        funds: _funds
      })
    };
  };
}