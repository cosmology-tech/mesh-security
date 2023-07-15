/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { Decimal, InstantiateMsg, ExecuteMsg, LocalStakingApiExecMsg, Binary, NativeStakingCallbackExecMsg, ExecMsg, QueryMsg, LocalStakingApiQueryMsg, NativeStakingCallbackQueryMsg, QueryMsg1, Addr, Config, MaxSlashResponse, OwnerByProxyResponse, ProxyByOwnerResponse } from "./NativeStaking.types";
export interface NativeStakingReadOnlyInterface {
  contractAddress: string;
  maxSlash: () => Promise<MaxSlashResponse>;
  config: () => Promise<Config>;
  proxyByOwner: ({
    owner
  }: {
    owner: string;
  }) => Promise<ProxyByOwnerResponse>;
  ownerByProxy: ({
    proxy
  }: {
    proxy: string;
  }) => Promise<OwnerByProxyResponse>;
}
export class NativeStakingQueryClient implements NativeStakingReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.maxSlash = this.maxSlash.bind(this);
    this.config = this.config.bind(this);
    this.proxyByOwner = this.proxyByOwner.bind(this);
    this.ownerByProxy = this.ownerByProxy.bind(this);
  }

  maxSlash = async (): Promise<MaxSlashResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      max_slash: {}
    });
  };
  config = async (): Promise<Config> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  proxyByOwner = async ({
    owner
  }: {
    owner: string;
  }): Promise<ProxyByOwnerResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      proxy_by_owner: {
        owner
      }
    });
  };
  ownerByProxy = async ({
    proxy
  }: {
    proxy: string;
  }): Promise<OwnerByProxyResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      owner_by_proxy: {
        proxy
      }
    });
  };
}
export interface NativeStakingInterface extends NativeStakingReadOnlyInterface {
  contractAddress: string;
  sender: string;
  receiveStake: ({
    msg,
    owner
  }: {
    msg: Binary;
    owner: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  releaseProxyStake: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export class NativeStakingClient extends NativeStakingQueryClient implements NativeStakingInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.receiveStake = this.receiveStake.bind(this);
    this.releaseProxyStake = this.releaseProxyStake.bind(this);
  }

  receiveStake = async ({
    msg,
    owner
  }: {
    msg: Binary;
    owner: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      receive_stake: {
        msg,
        owner
      }
    }, fee, memo, _funds);
  };
  releaseProxyStake = async (fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      release_proxy_stake: {}
    }, fee, memo, _funds);
  };
}