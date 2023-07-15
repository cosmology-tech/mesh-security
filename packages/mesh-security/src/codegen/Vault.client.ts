/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Binary, InstantiateMsg, StakingInitInfo, ExecuteMsg, VaultApiExecMsg, Uint128, ExecMsg, Coin, QueryMsg, VaultApiQueryMsg, QueryMsg1, MaybeAccountResponse, AccountResponse, AccountClaimsResponse, LienInfo, AllAccountsResponse, AllAccountsResponseItem, Tx, Addr, Decimal, AllTxsResponse, Lien, ConfigResponse } from "./Vault.types";
export interface VaultReadOnlyInterface {
  contractAddress: string;
  account: ({
    account
  }: {
    account: string;
  }) => Promise<MaybeAccountResponse>;
  config: () => Promise<ConfigResponse>;
  claim: ({
    account,
    lienholder
  }: {
    account: string;
    lienholder: string;
  }) => Promise<Lien>;
  accountClaims: ({
    account,
    limit,
    startAfter
  }: {
    account: string;
    limit?: number;
    startAfter?: string;
  }) => Promise<AccountClaimsResponse>;
  allAccounts: ({
    limit,
    startAfter,
    withCollateral
  }: {
    limit?: number;
    startAfter?: string;
    withCollateral: boolean;
  }) => Promise<AllAccountsResponse>;
  pendingTx: ({
    txId
  }: {
    txId: number;
  }) => Promise<Tx>;
  allPendingTxsDesc: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: number;
  }) => Promise<AllTxsResponse>;
}
export class VaultQueryClient implements VaultReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.account = this.account.bind(this);
    this.config = this.config.bind(this);
    this.claim = this.claim.bind(this);
    this.accountClaims = this.accountClaims.bind(this);
    this.allAccounts = this.allAccounts.bind(this);
    this.pendingTx = this.pendingTx.bind(this);
    this.allPendingTxsDesc = this.allPendingTxsDesc.bind(this);
  }

  account = async ({
    account
  }: {
    account: string;
  }): Promise<MaybeAccountResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      account: {
        account
      }
    });
  };
  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  claim = async ({
    account,
    lienholder
  }: {
    account: string;
    lienholder: string;
  }): Promise<Lien> => {
    return this.client.queryContractSmart(this.contractAddress, {
      claim: {
        account,
        lienholder
      }
    });
  };
  accountClaims = async ({
    account,
    limit,
    startAfter
  }: {
    account: string;
    limit?: number;
    startAfter?: string;
  }): Promise<AccountClaimsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      account_claims: {
        account,
        limit,
        start_after: startAfter
      }
    });
  };
  allAccounts = async ({
    limit,
    startAfter,
    withCollateral
  }: {
    limit?: number;
    startAfter?: string;
    withCollateral: boolean;
  }): Promise<AllAccountsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_accounts: {
        limit,
        start_after: startAfter,
        with_collateral: withCollateral
      }
    });
  };
  pendingTx = async ({
    txId
  }: {
    txId: number;
  }): Promise<Tx> => {
    return this.client.queryContractSmart(this.contractAddress, {
      pending_tx: {
        tx_id: txId
      }
    });
  };
  allPendingTxsDesc = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: number;
  }): Promise<AllTxsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_pending_txs_desc: {
        limit,
        start_after: startAfter
      }
    });
  };
}
export interface VaultInterface extends VaultReadOnlyInterface {
  contractAddress: string;
  sender: string;
  releaseCrossStake: ({
    amount,
    owner
  }: {
    amount: Coin;
    owner: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  releaseLocalStake: ({
    owner
  }: {
    owner: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  commitTx: ({
    txId
  }: {
    txId: number;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  rollbackTx: ({
    txId
  }: {
    txId: number;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  bond: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  unbond: ({
    amount
  }: {
    amount: Coin;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  stakeRemote: ({
    amount,
    contract,
    msg
  }: {
    amount: Coin;
    contract: string;
    msg: Binary;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  stakeLocal: ({
    amount,
    msg
  }: {
    amount: Coin;
    msg: Binary;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export class VaultClient extends VaultQueryClient implements VaultInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.releaseCrossStake = this.releaseCrossStake.bind(this);
    this.releaseLocalStake = this.releaseLocalStake.bind(this);
    this.commitTx = this.commitTx.bind(this);
    this.rollbackTx = this.rollbackTx.bind(this);
    this.bond = this.bond.bind(this);
    this.unbond = this.unbond.bind(this);
    this.stakeRemote = this.stakeRemote.bind(this);
    this.stakeLocal = this.stakeLocal.bind(this);
  }

  releaseCrossStake = async ({
    amount,
    owner
  }: {
    amount: Coin;
    owner: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      release_cross_stake: {
        amount,
        owner
      }
    }, fee, memo, _funds);
  };
  releaseLocalStake = async ({
    owner
  }: {
    owner: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      release_local_stake: {
        owner
      }
    }, fee, memo, _funds);
  };
  commitTx = async ({
    txId
  }: {
    txId: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      commit_tx: {
        tx_id: txId
      }
    }, fee, memo, _funds);
  };
  rollbackTx = async ({
    txId
  }: {
    txId: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      rollback_tx: {
        tx_id: txId
      }
    }, fee, memo, _funds);
  };
  bond = async (fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      bond: {}
    }, fee, memo, _funds);
  };
  unbond = async ({
    amount
  }: {
    amount: Coin;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      unbond: {
        amount
      }
    }, fee, memo, _funds);
  };
  stakeRemote = async ({
    amount,
    contract,
    msg
  }: {
    amount: Coin;
    contract: string;
    msg: Binary;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      stake_remote: {
        amount,
        contract,
        msg
      }
    }, fee, memo, _funds);
  };
  stakeLocal = async ({
    amount,
    msg
  }: {
    amount: Coin;
    msg: Binary;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      stake_local: {
        amount,
        msg
      }
    }, fee, memo, _funds);
  };
}