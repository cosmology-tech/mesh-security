/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Binary, Coin, MaybeAccountResponse, AccountClaimsResponse, AllAccountsResponse, Tx, AllTxsResponse, Lien, ConfigResponse } from "./Vault.types";
export interface VaultReadOnlyInterface {
    contractAddress: string;
    account: ({ account }: {
        account: string;
    }) => Promise<MaybeAccountResponse>;
    config: () => Promise<ConfigResponse>;
    claim: ({ account, lienholder }: {
        account: string;
        lienholder: string;
    }) => Promise<Lien>;
    accountClaims: ({ account, limit, startAfter }: {
        account: string;
        limit?: number;
        startAfter?: string;
    }) => Promise<AccountClaimsResponse>;
    allAccounts: ({ limit, startAfter, withCollateral }: {
        limit?: number;
        startAfter?: string;
        withCollateral: boolean;
    }) => Promise<AllAccountsResponse>;
    pendingTx: ({ txId }: {
        txId: number;
    }) => Promise<Tx>;
    allPendingTxsDesc: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: number;
    }) => Promise<AllTxsResponse>;
}
export declare class VaultQueryClient implements VaultReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    account: ({ account }: {
        account: string;
    }) => Promise<MaybeAccountResponse>;
    config: () => Promise<ConfigResponse>;
    claim: ({ account, lienholder }: {
        account: string;
        lienholder: string;
    }) => Promise<Lien>;
    accountClaims: ({ account, limit, startAfter }: {
        account: string;
        limit?: number;
        startAfter?: string;
    }) => Promise<AccountClaimsResponse>;
    allAccounts: ({ limit, startAfter, withCollateral }: {
        limit?: number;
        startAfter?: string;
        withCollateral: boolean;
    }) => Promise<AllAccountsResponse>;
    pendingTx: ({ txId }: {
        txId: number;
    }) => Promise<Tx>;
    allPendingTxsDesc: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: number;
    }) => Promise<AllTxsResponse>;
}
export interface VaultInterface extends VaultReadOnlyInterface {
    contractAddress: string;
    sender: string;
    releaseCrossStake: ({ amount, owner }: {
        amount: Coin;
        owner: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    releaseLocalStake: ({ owner }: {
        owner: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    commitTx: ({ txId }: {
        txId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    rollbackTx: ({ txId }: {
        txId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    bond: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    unbond: ({ amount }: {
        amount: Coin;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    stakeRemote: ({ amount, contract, msg }: {
        amount: Coin;
        contract: string;
        msg: Binary;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    stakeLocal: ({ amount, msg }: {
        amount: Coin;
        msg: Binary;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class VaultClient extends VaultQueryClient implements VaultInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    releaseCrossStake: ({ amount, owner }: {
        amount: Coin;
        owner: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    releaseLocalStake: ({ owner }: {
        owner: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    commitTx: ({ txId }: {
        txId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    rollbackTx: ({ txId }: {
        txId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    bond: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    unbond: ({ amount }: {
        amount: Coin;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    stakeRemote: ({ amount, contract, msg }: {
        amount: Coin;
        contract: string;
        msg: Binary;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    stakeLocal: ({ amount, msg }: {
        amount: Coin;
        msg: Binary;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
