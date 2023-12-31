/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "@cosmjs/cosmwasm-stargate";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { Decimal, InstantiateMsg, ExecuteMsg, LocalStakingApiExecMsg, Binary, NativeStakingCallbackExecMsg, ExecMsg, QueryMsg, LocalStakingApiQueryMsg, NativeStakingCallbackQueryMsg, QueryMsg1, Addr, Config, MaxSlashResponse, OwnerByProxyResponse, ProxyByOwnerResponse } from "./NativeStaking.types";
export interface NativeStakingMessage {
  contractAddress: string;
  sender: string;
  receiveStake: ({
    msg,
    owner
  }: {
    msg: Binary;
    owner: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  releaseProxyStake: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class NativeStakingMessageComposer implements NativeStakingMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.receiveStake = this.receiveStake.bind(this);
    this.releaseProxyStake = this.releaseProxyStake.bind(this);
  }

  receiveStake = ({
    msg,
    owner
  }: {
    msg: Binary;
    owner: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          receive_stake: {
            msg,
            owner
          }
        })),
        funds: _funds
      })
    };
  };
  releaseProxyStake = (_funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          release_proxy_stake: {}
        })),
        funds: _funds
      })
    };
  };
}