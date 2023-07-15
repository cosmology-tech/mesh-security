/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { ContractBase, IContractConstructor } from "./contractContextBase";
import { NativeStakingClient, NativeStakingQueryClient } from "./NativeStaking.client";
import { NativeStakingMessageComposer } from "./NativeStaking.message-composer";
export class NativeStaking extends ContractBase<NativeStakingClient, NativeStakingQueryClient, NativeStakingMessageComposer> {
  constructor({
    address,
    cosmWasmClient,
    signingCosmWasmClient
  }: IContractConstructor) {
    super(address, cosmWasmClient, signingCosmWasmClient, NativeStakingClient, NativeStakingQueryClient, NativeStakingMessageComposer);
  }

}