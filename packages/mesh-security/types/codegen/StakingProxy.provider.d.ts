/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { ContractBase, IContractConstructor } from "./contractContextBase";
import { StakingProxyClient, StakingProxyQueryClient } from "./StakingProxy.client";
import { StakingProxyMessageComposer } from "./StakingProxy.message-composer";
export declare class StakingProxy extends ContractBase<StakingProxyClient, StakingProxyQueryClient, StakingProxyMessageComposer> {
    constructor({ address, cosmWasmClient, signingCosmWasmClient }: IContractConstructor);
}
