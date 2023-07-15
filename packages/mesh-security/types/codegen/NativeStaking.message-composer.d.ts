/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "@cosmjs/cosmwasm-stargate";
import { Binary } from "./NativeStaking.types";
export interface NativeStakingMessage {
    contractAddress: string;
    sender: string;
    receiveStake: ({ msg, owner }: {
        msg: Binary;
        owner: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    releaseProxyStake: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class NativeStakingMessageComposer implements NativeStakingMessage {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    receiveStake: ({ msg, owner }: {
        msg: Binary;
        owner: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    releaseProxyStake: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
