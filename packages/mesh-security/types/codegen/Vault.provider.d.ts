/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { ContractBase, IContractConstructor } from "./contractContextBase";
import { VaultClient, VaultQueryClient } from "./Vault.client";
import { VaultMessageComposer } from "./Vault.message-composer";
export declare class Vault extends ContractBase<VaultClient, VaultQueryClient, VaultMessageComposer> {
    constructor({ address, cosmWasmClient, signingCosmWasmClient }: IContractConstructor);
}
